import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

function ExperienceScrollytelling({ experiences }) {
  const count = experiences.length;
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Responsive breakpoint listener
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Desktop: scroll-scrubbed active index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isMobile) return;
    const idx = Math.min(Math.floor(latest * count), count - 1);
    setActiveIndex((prev) => (prev !== idx ? idx : prev));
  });

  // Mobile: IntersectionObserver
  const mobileRefs = useRef([]);
  useEffect(() => {
    if (!isMobile) return;
    const observers = [];
    mobileRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { rootMargin: '-30% 0px -30% 0px', threshold: 0.01 }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isMobile, count]);

  // Scroll to a specific timeline node
  const scrollToNode = useCallback((index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollable = containerRef.current.offsetHeight - window.innerHeight;
    const target = containerTop + (index / count) * scrollable + 1;
    window.scrollTo({ top: target, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [count, prefersReducedMotion]);

  const active = experiences[activeIndex];
  const dur = prefersReducedMotion ? 0.01 : 0.42;
  const exitDur = prefersReducedMotion ? 0.01 : 0.2;
  const ease = [0.32, 0.72, 0, 1]; // Apple-style ease

  // ───────────── Mobile layout ─────────────
  if (isMobile) {
    return (
      <section className="exp-section" aria-label="Professional experience">
        <div className="exp-mobile-wrap">
          <h2 className="exp-heading">Experience</h2>
          <ol className="exp-mobile-list" role="list">
            {experiences.map((exp, i) => (
              <li
                key={exp.id || i}
                ref={(el) => (mobileRefs.current[i] = el)}
                className={`exp-mobile-item ${i === activeIndex ? 'active' : ''} ${i < activeIndex ? 'past' : ''}`}
              >
                <div className="exp-mobile-rail" aria-hidden="true">
                  <div className={`exp-mobile-node ${i <= activeIndex ? 'lit' : ''} ${i === activeIndex ? 'current' : ''}`}>
                    {exp.icon}
                  </div>
                  {i < count - 1 && (
                    <div className={`exp-mobile-line ${i < activeIndex ? 'filled' : ''}`} />
                  )}
                </div>
                <article className="exp-mobile-body">
                  <span className="exp-card-period">{exp.period}</span>
                  <h3 className="exp-card-role">{exp.role}</h3>
                  <p className="exp-card-company">{exp.company}</p>
                  <p className="exp-card-desc">{exp.description}</p>
                  {exp.tags?.length > 0 && (
                    <div className="exp-card-tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="exp-card-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  // ───────────── Desktop: pinned scrollytelling ─────────────
  return (
    <section className="exp-section" aria-label="Professional experience">
      <div
        className="exp-scroll-container"
        ref={containerRef}
        style={{ height: `${(count + 1) * 100}vh` }}
      >
        <div className="exp-pinned">
          <div className="exp-inner">
            <h2 className="exp-heading">Experience</h2>

            <div className="exp-stage">
              {/* Timeline rail */}
              <nav className="exp-timeline" aria-label="Experience timeline">
                <div className="exp-track" aria-hidden="true">
                  <motion.div
                    className="exp-track-fill"
                    style={{ scaleY: scrollYProgress }}
                  />
                </div>
                {experiences.map((exp, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;
                  return (
                    <button
                      key={exp.id || i}
                      type="button"
                      className={`exp-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                      aria-label={`${exp.role} at ${exp.company}, ${exp.period}`}
                      aria-current={isActive ? 'step' : undefined}
                      onClick={() => scrollToNode(i)}
                      style={{ top: `${(i / Math.max(count - 1, 1)) * 100}%` }}
                    >
                      <span className="exp-node-ring">
                        <span className="exp-node-icon">{exp.icon}</span>
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Active card display */}
              <div className="exp-card-area">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeIndex}
                    className="exp-card"
                    initial={prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 36, scale: 0.97 }}
                    animate={prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0, scale: 1 }}
                    exit={prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -24, scale: 0.97, transition: { duration: exitDur, ease } }}
                    transition={{ duration: dur, ease }}
                  >
                    <header className="exp-card-top">
                      <span className="exp-card-period">{active.period}</span>
                      <span className="exp-card-location">{active.location}</span>
                    </header>

                    <h3 className="exp-card-role">{active.role}</h3>
                    <p className="exp-card-company">{active.company}</p>
                    <p className="exp-card-desc">{active.description}</p>

                    {active.achievements?.length > 0 && (
                      <ul className="exp-card-highlights" role="list">
                        {active.achievements.map((text, j) => (
                          <motion.li
                            key={j}
                            initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: prefersReducedMotion ? 0 : 0.18 + j * 0.06,
                              duration: 0.3,
                            }}
                          >
                            {text}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {active.tags?.length > 0 && (
                      <div className="exp-card-tags">
                        {active.tags.map((tag, j) => (
                          <motion.span
                            key={tag}
                            className="exp-card-tag"
                            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: prefersReducedMotion ? 0 : 0.3 + j * 0.04,
                              duration: 0.22,
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    <footer className="exp-card-footer" aria-label={`Experience ${activeIndex + 1} of ${count}`}>
                      <span className="exp-card-step-num">{String(activeIndex + 1).padStart(2, '0')}</span>
                      <span className="exp-card-step-sep">/</span>
                      <span className="exp-card-step-total">{String(count).padStart(2, '0')}</span>
                    </footer>
                  </motion.article>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceScrollytelling;
