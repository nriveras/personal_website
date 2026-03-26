import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

function EducationScrollytelling({ education }) {
  const count = education.length;
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

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isMobile) return;
    const idx = Math.min(Math.floor(latest * count), count - 1);
    setActiveIndex((prev) => (prev !== idx ? idx : prev));
  });

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

  const scrollToNode = useCallback((index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollable = containerRef.current.offsetHeight - window.innerHeight;
    const target = containerTop + (index / count) * scrollable + 1;
    window.scrollTo({ top: target, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [count, prefersReducedMotion]);

  const active = education[activeIndex];
  const dur = prefersReducedMotion ? 0.01 : 0.55;
  const exitDur = prefersReducedMotion ? 0.01 : 0.28;
  const ease = [0.32, 0.72, 0, 1];

  // ───────────── Mobile layout ─────────────
  if (isMobile) {
    return (
      <section className="edu-section" aria-label="Education">
        <div className="edu-mobile-wrap">
          <h2 className="edu-heading">Education</h2>
          <ol className="edu-mobile-list" role="list">
            {education.map((edu, i) => (
              <li
                key={edu.id || i}
                ref={(el) => (mobileRefs.current[i] = el)}
                className={`edu-mobile-item ${i === activeIndex ? 'active' : ''} ${i < activeIndex ? 'past' : ''}`}
              >
                <article className="edu-mobile-body">
                  <span className="edu-card-period">{edu.period}</span>
                  <h3 className="edu-card-role">{edu.degree}</h3>
                  <p className="edu-card-company">{edu.institution}</p>
                  <p className="edu-card-desc">{edu.description}</p>
                  {edu.highlights?.length > 0 && (
                    <ul className="edu-card-highlights" role="list">
                      {edu.highlights.map((text, j) => (
                        <li key={j}>{text}</li>
                      ))}
                    </ul>
                  )}
                  {edu.tags?.length > 0 && (
                    <div className="edu-card-tags">
                      {edu.tags.map((tag) => (
                        <span key={tag} className="edu-card-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </article>
                <div className="edu-mobile-rail" aria-hidden="true">
                  <div className={`edu-mobile-node ${i <= activeIndex ? 'lit' : ''} ${i === activeIndex ? 'current' : ''}`}>
                    {edu.icon}
                  </div>
                  {i < count - 1 && (
                    <div className={`edu-mobile-line ${i < activeIndex ? 'filled' : ''}`} />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  // ───────────── Desktop: pinned scrollytelling (timeline on RIGHT) ─────────────
  return (
    <section className="edu-section" aria-label="Education">
      <div
        className="edu-scroll-container"
        ref={containerRef}
        style={{ height: `${(count + 1) * 100}vh` }}
      >
        <div className="edu-pinned">
          <div className="edu-inner">
            <h2 className="edu-heading">Education</h2>

            <div className="edu-stage">
              {/* Active card display — LEFT side */}
              <div className="edu-card-area">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeIndex}
                    className="edu-card"
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
                    <header className="edu-card-top">
                      <span className="edu-card-period">{active.period}</span>
                      <span className="edu-card-location">{active.location}</span>
                    </header>

                    <h3 className="edu-card-role">{active.degree}</h3>
                    <p className="edu-card-company">{active.institution}</p>
                    <p className="edu-card-desc">{active.description}</p>

                    {active.highlights?.length > 0 && (
                      <ul className="edu-card-highlights" role="list">
                        {active.highlights.map((text, j) => (
                          <motion.li
                            key={j}
                            initial={prefersReducedMotion ? {} : { opacity: 0, x: 10 }}
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
                      <div className="edu-card-tags">
                        {active.tags.map((tag, j) => (
                          <motion.span
                            key={tag}
                            className="edu-card-tag"
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

                    <footer className="edu-card-footer" aria-label={`Education ${activeIndex + 1} of ${count}`}>
                      <span className="edu-card-step-num">{String(activeIndex + 1).padStart(2, '0')}</span>
                      <span className="edu-card-step-sep">/</span>
                      <span className="edu-card-step-total">{String(count).padStart(2, '0')}</span>
                    </footer>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Timeline rail — RIGHT side */}
              <nav className="edu-timeline" aria-label="Education timeline">
                <div className="edu-track" aria-hidden="true">
                  <motion.div
                    className="edu-track-fill"
                    style={{ scaleY: scrollYProgress }}
                  />
                </div>
                {education.map((edu, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;
                  return (
                    <button
                      key={edu.id || i}
                      type="button"
                      className={`edu-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                      aria-label={`${edu.degree} at ${edu.institution}, ${edu.period}`}
                      aria-current={isActive ? 'step' : undefined}
                      onClick={() => scrollToNode(i)}
                      style={{ top: `${(i / Math.max(count - 1, 1)) * 100}%` }}
                    >
                      <span className="edu-node-ring">
                        <span className="edu-node-icon">{edu.icon}</span>
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationScrollytelling;
