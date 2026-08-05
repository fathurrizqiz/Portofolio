import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { about, profile } from '../data/content';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref}>
      <span className="section-label">01 — Tentang</span>
      <div className="about-grid">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <img src={profile.photo} alt={profile.name} />
        </motion.div>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {about.split('. ').map((sentence, i) => (
            <span key={i}>{sentence}. </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}