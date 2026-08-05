import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/content';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref}>
      <span className="section-label">02 — Keahlian Teknis</span>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h3>{category}</h3>
            <ul>
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}