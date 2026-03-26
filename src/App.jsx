import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Code, LineChart, Satellite, Camera, Mail, MapPin } from 'lucide-react';

const GlobeBackground = lazy(() => import('./components/GlobeBackground'));

function App() {
  const avatarSrc = `${import.meta.env.BASE_URL}avatar.jpg`;
  const contactSectionRef = useRef(null);
  const contactNameInputRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [interaction, setInteraction] = useState({
    x: 0.5,
    y: 0.5,
    active: false,
    intensity: 0
  });
  const nextInteraction = useRef(interaction);
  const rafId = useRef(null);

  const flushInteractionFrame = () => {
    if (rafId.current !== null) return;

    rafId.current = window.requestAnimationFrame(() => {
      rafId.current = null;
      setInteraction(nextInteraction.current);
    });
  };

  const handlePointerEnter = (event) => {
    nextInteraction.current = {
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
      active: true,
      intensity: 1
    };
    flushInteractionFrame();
  };

  const handlePointerMove = (event) => {
    nextInteraction.current = {
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
      active: true,
      intensity: 1
    };
    flushInteractionFrame();
  };

  const handlePointerLeave = () => {
    nextInteraction.current = {
      x: 0.5,
      y: 0.5,
      active: false,
      intensity: 0
    };
    flushInteractionFrame();
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    setTheme(media.matches ? 'dark' : 'light');
    media.addEventListener('change', handleThemeChange);

    return () => media.removeEventListener('change', handleThemeChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    const hue = 214 + (interaction.x - 0.5) * 30;
    const saturation = theme === 'dark'
      ? 18 + interaction.intensity * 24
      : 14 + interaction.intensity * 20;
    const lightness = theme === 'dark'
      ? 66 + (0.5 - interaction.y) * 10 + interaction.intensity * 6
      : 44 + (0.5 - interaction.y) * 16 + interaction.intensity * 4;
    const strongLightness = theme === 'dark'
      ? Math.min(92, lightness + 10)
      : Math.max(28, lightness - 14);
    const glowAlpha = theme === 'dark'
      ? 0.24 + interaction.intensity * 0.28
      : 0.18 + interaction.intensity * 0.2;
    const cursorXPct = `${(interaction.x * 100).toFixed(2)}%`;
    const cursorYPct = `${(interaction.y * 100).toFixed(2)}%`;

    root.style.setProperty('--accent-color', `hsl(${hue.toFixed(1)} ${saturation.toFixed(1)}% ${lightness.toFixed(1)}%)`);
    root.style.setProperty('--accent-strong', `hsl(${hue.toFixed(1)} ${(saturation + 6).toFixed(1)}% ${strongLightness.toFixed(1)}%)`);
    root.style.setProperty('--accent-light', `hsl(${hue.toFixed(1)} ${(saturation + 8).toFixed(1)}% 90%)`);
    root.style.setProperty('--accent-glow', `hsla(${hue.toFixed(1)} ${(saturation + 12).toFixed(1)}% 50% / ${glowAlpha.toFixed(2)})`);
    root.style.setProperty('--cursor-x', cursorXPct);
    root.style.setProperty('--cursor-y', cursorYPct);

    return () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [interaction, theme]);

  const skills = [
    { name: 'Agriculture', icon: <Leaf size={24} /> },
    { name: 'Programming (R)', icon: <Code size={24} /> },
    { name: 'Statistics', icon: <LineChart size={24} /> },
    { name: 'Remote Sensing', icon: <Satellite size={24} /> },
    { name: 'Photography', icon: <Camera size={24} /> },
  ];

  const handleGetInTouchClick = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Delay focus slightly to let smooth scrolling settle.
    window.setTimeout(() => {
      contactNameInputRef.current?.focus();
    }, 420);
  };

  return (
    <div
      className="app-container"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* BACKGROUND SCENE */}
      <Suspense fallback={null}>
        <GlobeBackground interaction={interaction} theme={theme} />
      </Suspense>

      {/* HERO SECTION */}
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hero-content"
        >
          <div className="avatar-container">
            <img src={avatarSrc} alt="Nicolás Riveras Muñoz" className="avatar" onError={(e) => e.target.style.display = 'none'} />
          </div>
          <span className="pill">Welcome</span>
          <h1>Nicolás Riveras Muñoz</h1>
          <p className="subtitle">
            <MapPin size={20} /> Doctoral student & Tech Enthusiast
          </p>
        </motion.div>
      </section>

      {/* BENTO GRID: ABOUT & SKILLS & CONTACT */}
      <section className="section">
        <div className="container">
          <div className="bento-grid">
            
            {/* ABOUT CARD (Spans 8 cols on desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bento-card col-span-8 about-content"
            >
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2rem' }}>About Me</h2>
              <p>
                I'm a nature and tech enthusiast, constantly torn between two ways of problem-solving: getting hands-on with experiments or diving deep into data analysis. The truth is, there's no one-size-fits-all answer, and it really depends on the situation. But what excites me most is the journey of learning, the thrill of cracking those tough problems, and the joy of helping others along the way.
              </p>
              <br />
              <p>
                Right now, I'm diving into the world of soil science, that often-overlooked layer that's vital to so many processes on our planet. My current quest revolves around understanding how living organisms (biota) play a crucial role in shaping landscapes by controlling erosion. Join me on this adventure as we uncover the secrets hidden beneath Earth's surface, all while harnessing the power of Machine Learning and Data Science to make sense of it all.
              </p>
            </motion.div>

            {/* QUICK CONTACT CARD (Spans 4 cols on desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bento-card col-span-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Get in Touch</h3>
               <div className="contact-info">
                  <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <div>
                      <h4 style={{ color: 'var(--text-primary)' }}>Location</h4>
                      <p>Tübingen, Germany</p>
                    </div>
                  </div>
               </div>
               <button type="button" className="contact-cta-btn" onClick={handleGetInTouchClick}>
                  <Mail size={18} />
                  Get in Touch
               </button>
            </motion.div>

            {/* SKILLS CARDS (Span 12 cols total, using subgrid or flex inside) */}
            <div className="col-span-12">
               <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="section-title"
                  style={{ textAlign: 'left', marginTop: '3rem', marginBottom: '2rem', fontSize: '2rem' }}
                >
                  Skills & Expertise
                </motion.h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="bento-card skill-card"
                    >
                      <div className="icon-wrapper">{skill.icon}</div>
                      <h3 style={{color: 'var(--text-primary)'}}>{skill.name}</h3>
                    </motion.div>
                  ))}
                </div>
            </div>

            {/* CONTACT FORM (Spans 12 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              ref={contactSectionRef}
              className="bento-card col-span-12"
              style={{ marginTop: '4rem' }}
            >
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Send a Message</h2>
              <form className="contact-form" name="contact" method="POST" data-netlify="true" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <input ref={contactNameInputRef} type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="How can I help you?" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto', background: 'var(--surface-bg)', zIndex: 10, position: 'relative' }}>
        <p>© {new Date().getFullYear()} Nicolás Riveras Muñoz. Built with Vite & React.</p>
      </footer>
    </div>
  );
}

export default App;
