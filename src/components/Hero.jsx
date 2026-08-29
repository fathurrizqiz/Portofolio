import { motion } from 'framer-motion';
import { profile } from '../data/content';
import { cv } from '../data/content';

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
        <div>
          <a href={cv.link} target="_blank" rel="noopener" className="project-link">
                    CV
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7V16"/>
                    </svg>
                  </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        SCROLL KEBAWAH
      </motion.div>
    </section>
  );
}