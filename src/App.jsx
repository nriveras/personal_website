import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Code, LineChart, Satellite, Camera, Mail, MapPin } from 'lucide-react';

function App() {
  const skills = [
    { name: 'Agriculture', icon: <Leaf size={24} /> },
    { name: 'Programming (R)', icon: <Code size={24} /> },
    { name: 'Statistics', icon: <LineChart size={24} /> },
    { name: 'Remote Sensing', icon: <Satellite size={24} /> },
    { name: 'Photography', icon: <Camera size={24} /> },
  ];

  return (
    <div className="app-container">
      {/* HERO SECTION */}
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hero-content"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="avatar-container"
          >
            <img src="/avatar.jpg" alt="Nicolás Riveras Muñoz" className="avatar" onError={(e) => e.target.style.display = 'none'} />
          </motion.div>
          <h1>Nicolás Riveras Muñoz</h1>
          <p className="subtitle">Doctoral student & Tech Enthusiast</p>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content glass-card">
            <p>
              I'm a nature and tech enthusiast, constantly torn between two ways of problem-solving: getting hands-on with experiments or diving deep into data analysis. The truth is, there's no one-size-fits-all answer, and it really depends on the situation. But what excites me most is the journey of learning, the thrill of cracking those tough problems, and the joy of helping others along the way.
            </p>
            <p>
              Right now, I'm diving into the world of soil science, that often-overlooked layer that's vital to so many processes on our planet. My current quest revolves around understanding how living organisms (biota) play a crucial role in shaping landscapes by controlling erosion. Join me on this adventure as we uncover the secrets hidden beneath Earth's surface, all while harnessing the power of Machine Learning and Data Science to make sense of it all.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section skills">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
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
                className="skill-card glass-card"
              >
                <div className="icon-wrapper">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-card glass-card">
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Tübingen, Germany</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:nriveras@ug.uchile.cl">nriveras@ug.uchile.cl</a>
                </div>
              </div>
            </div>
            
            <form className="contact-form" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </motion.div>
      </section>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nicolás Riveras Muñoz. Built with Vite & React.</p>
      </footer>
    </div>
  );
}

export default App;
