import { motion } from 'framer-motion';
import { profile } from '../data/content';

export default function Hero() {
  const nameWords = profile.name.split(' ');
  
  return (
    <section className="hero" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <h1 className="hero-name">
          {nameWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.8 }}
              style={{ display: 'inline-block', marginRight: '0.2em' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Membangun solusi web tangguh dengan arsitektur modern, menyatukan backend Laravel/Vue.js dengan kecerdasan AI untuk dampak nyata.
      </motion.p>

      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>{profile.location}</span>
        <span>{profile.title}</span>
        <span>Tersedia untuk kolaborasi</span>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}