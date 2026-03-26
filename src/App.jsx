import React, { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, LineChart, Satellite, Mail, MapPin, Sun, Moon, Briefcase, GraduationCap, Rocket, Database, Cloud, FlaskConical, Braces, Microscope, Sprout } from 'lucide-react';
import ExperienceScrollytelling from './components/ExperienceScrollytelling';
import EducationScrollytelling from './components/EducationScrollytelling';

const GlobeBackground = lazy(() => import('./components/GlobeBackground'));

function App() {
  const avatarSrc = `${import.meta.env.BASE_URL}avatar.jpg`;
  const contactSectionRef = useRef(null);
  const contactEmailInputRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const savedTheme = window.localStorage.getItem('theme-preference');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const isManualTheme = useRef(false);

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
      if (isManualTheme.current) return;
      setTheme(event.matches ? 'dark' : 'light');
    };

    const savedTheme = window.localStorage.getItem('theme-preference');
    if (savedTheme !== 'light' && savedTheme !== 'dark') {
      setTheme(media.matches ? 'dark' : 'light');
    }

    media.addEventListener('change', handleThemeChange);

    return () => media.removeEventListener('change', handleThemeChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme-preference', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const setManualTheme = (nextTheme) => {
    isManualTheme.current = true;
    setTheme(nextTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    const hue = 214 + (interaction.x - 0.5) * 30;
    const saturation = theme === 'dark'
      ? 18 + interaction.intensity * 24
      : 40 + interaction.intensity * 16;
    const lightness = theme === 'dark'
      ? 66 + (0.5 - interaction.y) * 10 + interaction.intensity * 6
      : 36 + (0.5 - interaction.y) * 12 + interaction.intensity * 4;
    const strongLightness = theme === 'dark'
      ? Math.min(92, lightness + 10)
      : Math.max(28, lightness - 14);
    const glowAlpha = theme === 'dark'
      ? 0.24 + interaction.intensity * 0.28
      : 0.22 + interaction.intensity * 0.28;
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
    { name: 'Python & Data Stack', desc: 'pandas · scikit-learn · Pydantic · FastAPI', icon: <Braces size={28} /> },
    { name: 'R & Statistics', desc: 'tidyverse · ggplot2 · tidymodels · Shiny', icon: <LineChart size={28} /> },
    { name: 'Machine Learning', desc: 'Predictive modeling · Genomic prediction', icon: <Database size={28} /> },
    { name: 'Geospatial & Remote Sensing', desc: 'GIS · Google Earth Engine · Drones', icon: <Satellite size={28} /> },
    { name: 'Cloud & DevOps', desc: 'AWS · Docker · Kubernetes · CI/CD', icon: <Cloud size={28} /> },
    { name: 'Soil & Environmental Science', desc: 'Erosion · Ecology · Lab analysis', icon: <FlaskConical size={28} /> },
  ];

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const ease = [0.32, 0.72, 0, 1];
  const sceneDur = prefersReducedMotion ? 0.01 : 0.8;
  const staggerDelay = prefersReducedMotion ? 0 : 0.1;

  const experiences = [
    {
      period: '2026 — Present',
      role: 'Software Developer',
      company: 'Computomics GmbH',
      location: 'Tübingen, Germany',
      description: 'Full-cycle development of ML-based agricultural data pipelines. Engineering and deploying features end-to-end using Python and the modern data stack, with comprehensive testing and code review.',
      achievements: [
        'Owned the full software development lifecycle for significant system modules, from initial architectural design to production deployment and performance monitoring.',
        'Engineered and deployed medium-to-complex features end-to-end using Python, Pydantic, and the Python data stack, including comprehensive unit testing.',
        'Streamlined development workflows utilizing Git, containerization, and established issue-tracking boards.',
      ],
      tags: ['Python', 'Pydantic', 'Docker', 'K8s', 'CI/CD'],
      icon: <Briefcase size={20} />
    },
    {
      period: '2023 — 2025',
      role: 'Data Analyst → Software Developer',
      company: 'Computomics GmbH',
      location: 'Tübingen, Germany',
      description: 'Managed 4 key client accounts in U.S. corn breeding, delivering ML-based genomic predictions. Designed a remote sensing pipeline integrating drone and satellite imagery with genomic data.',
      achievements: [
        'Managed and analyzed 4 key client accounts in corn breeding programs, translating complex datasets into actionable breeding decisions.',
        'Designed and implemented a remote-sensing data pipeline integrating multispectral drone and satellite imagery with genomic data to enhance predictive performance.',
        'Delivered analytical insights to clients in Europe, Africa, and the Americas using ML-based genomic prediction models.',
      ],
      tags: ['Python', 'ML', 'AWS', 'Remote Sensing', 'Spark'],
      icon: <LineChart size={20} />
    },
    {
      period: '2019 — 2023',
      role: 'Doctoral Researcher',
      company: 'University of Tübingen',
      location: 'Tübingen, Germany',
      description: 'Investigated microbial impacts on soil erosion through controlled rainfall experiments across Chilean climate gradients. Published 6 peer-reviewed papers (3 first-author). Taught applied R programming at Master\'s level.',
      achievements: [
        'Authored 6 peer-reviewed publications (3 first-author) and presented results at international conferences on soil sustainability and climate adaptation.',
        'Led field campaigns with rigorous experimental planning, protocol adherence, and traceable data collection across diverse climate gradients.',
        'Taught applied R programming for geosciences at the Master\'s level, focusing on reproducible workflows and exploratory analysis.',
      ],
      tags: ['R', 'Statistics', 'Experimental Design', 'GIS', 'Teaching'],
      icon: <GraduationCap size={20} />
    },
    {
      period: '2018 — 2021',
      role: 'Co-founder',
      company: 'Agrinnova SpA',
      location: 'Chile',
      description: 'Led design of experimental orchards and irrigation systems across distinct Chilean climates. Delivered 10+ soil-focused Environmental Impact Assessments for mining and solar energy projects. Managed field teams in remote high-altitude environments.',
      achievements: [
        'Led the design and implementation of 4 experimental agricultural orchards to evaluate crop adaptability across distinct agroclimatic regions of Chile.',
        'Delivered 10+ soil-focused Environmental Impact Assessments for mining and solar energy developments.',
        'Coordinated field campaigns involving 4–6 multidisciplinary professionals in high-altitude and remote rural environments.',
      ],
      tags: ['Drones', 'GIS', 'Irrigation', 'AutoCAD', 'EIA'],
      icon: <Rocket size={20} />
    }
  ];

  const education = [
    {
      period: '2019 — 2023',
      degree: 'Dr. rer. nat. (PhD) in Soil Sciences',
      institution: 'University of Tübingen',
      location: 'Tübingen, Germany',
      description: 'Doctoral research on microbial impacts on soil erosion across Chilean climate gradients. Designed controlled rainfall experiments and published 6 peer-reviewed papers, 3 as first author.',
      highlights: [
        'Developed novel experimental frameworks linking microbial community composition to soil aggregate stability under simulated rainfall.',
        'Published in high-impact journals including SOIL, Catena, and Geoderma.',
        'Taught applied R programming for geosciences at the Master\u2019s level.',
      ],
      tags: ['Soil Science', 'R', 'Statistics', 'Experimental Design'],
      icon: <GraduationCap size={20} />
    },
    {
      period: '2016 — 2018',
      degree: 'M.Sc. in Environmental Sciences',
      institution: 'University of Tübingen',
      location: 'Tübingen, Germany',
      description: 'Specialized in soil biogeochemistry and geospatial analysis. Thesis on remote sensing applications for erosion monitoring in semi-arid landscapes.',
      highlights: [
        'Integrated GIS, drone-based remote sensing, and field sampling methods in thesis research.',
        'Coursework in advanced statistics, environmental modeling, and spatial analysis.',
      ],
      tags: ['GIS', 'Remote Sensing', 'Biogeochemistry', 'Modeling'],
      icon: <Microscope size={20} />
    },
    {
      period: '2009 — 2015',
      degree: 'B.Sc. in Agricultural Engineering',
      institution: 'Universidad de Chile',
      location: 'Santiago, Chile',
      description: 'Foundation in agronomy, soil science, and environmental systems. Developed practical experience through field campaigns across diverse Chilean climates.',
      highlights: [
        'Studied soil physics, plant physiology, irrigation engineering, and agricultural economics.',
        'Completed field practicums in Chile\u2019s central valley and Atacama Desert fringe regions.',
      ],
      tags: ['Agronomy', 'Soil Physics', 'Irrigation', 'Plant Science'],
      icon: <Sprout size={20} />
    },
  ];

  const handleGetInTouchClick = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.setTimeout(() => {
      contactEmailInputRef.current?.focus();
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

      <div className="cursor-glow" />

      <div className="theme-switcher" aria-label="Theme switcher">
        <button
          type="button"
          className={`theme-switch-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setManualTheme('light')}
          aria-pressed={theme === 'light'}
        >
          <Sun size={16} />
          Light
        </button>
        <button
          type="button"
          className={`theme-switch-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setManualTheme('dark')}
          aria-pressed={theme === 'dark'}
        >
          <Moon size={16} />
          Dark
        </button>
      </div>

      {/* ── SCENE 1: HERO / IDENTITY ── */}
      <section className="hero" aria-label="Introduction">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="hero-content"
        >
          <div className="avatar-container">
            <img src={avatarSrc} alt="Nicolás Riveras Muñoz" className="avatar" onError={(e) => e.target.style.display = 'none'} />
          </div>
          <h1>Nicolás Riveras Muñoz</h1>
          <p className="subtitle">
            <MapPin size={18} /> Soil & Data Scientist · PhD
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="hero-what-i-do"
        >
          <ul className="what-i-do-list">
            <li><Code size={16} /> <span>Software Development</span></li>
            <li><LineChart size={16} /> <span>ML & Data Science</span></li>
            <li><Satellite size={16} /> <span>Geospatial Analysis</span></li>
            <li><FlaskConical size={16} /> <span>Soil & Environmental Research</span></li>
          </ul>
        </motion.div>
      </section>

      {/* ── SCENE 2: RESEARCH VISION ── */}
      <section className="scene" aria-label="About">
        <motion.div
          className="scene-content"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: sceneDur, ease }}
        >
          <h2 className="scene-heading">Bridging Science & Software</h2>
          <p className="scene-body">
            Agricultural engineer turned data scientist with a PhD in soil sciences. I bridge the gap between environmental research and production-grade software.
          </p>
          <p className="scene-body">
            From designing rainfall experiments in the field to building ML pipelines that help breeding programs cut costs by up to 7%.
          </p>
          <p className="scene-body">
            Currently at Computomics, I own end-to-end development of Python-based data pipelines for agricultural genomics, serving clients across the Americas, Europe, and Africa.
          </p>
          <p className="scene-body">
            My sweet spot is turning messy real-world datasets into clear, actionable insights.
          </p>
        </motion.div>
      </section>

      {/* ── SCENE 3: SKILLS & EXPERTISE ── */}
      <section className="scene" aria-label="Skills and expertise">
        <motion.div
          className="scene-content"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: sceneDur, ease }}
        >
          <h2 className="scene-heading">Skills & Expertise</h2>
        </motion.div>

        <div className="skills-grid" style={{ marginTop: '1rem' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.95 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: staggerDelay * index, duration: 0.5, ease }}
              whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.04 }}
              className="skill-card"
            >
              <div className="icon-wrapper">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SCENE 4: EXPERIENCE ── */}
      <ExperienceScrollytelling experiences={experiences} />

      {/* ── SCENE 5: EDUCATION ── */}
      <EducationScrollytelling education={education} />

      {/* ── SCENE 6: CONTACT / CTA ── */}
      <section className="scene" aria-label="Contact" ref={contactSectionRef}>
        <motion.div
          className="contact-scene-inner"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: sceneDur, ease }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="scene-heading">Let's Connect</h2>
          <p className="contact-scene-subtitle">
            Have a project in mind, a question, or just want to say hello?
          </p>
          <form className="contact-form" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input ref={contactEmailInputRef} type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your message..." rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn" style={{ width: '100%' }}>
              <Mail size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Nicolás Riveras Muñoz</p>
      </footer>
    </div>
  );
}

export default App;
