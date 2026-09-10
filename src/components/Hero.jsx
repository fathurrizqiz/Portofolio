import { motion } from 'framer-motion';
import { hero } from '../data/content';
import { cv } from '../data/content';

export default function Hero() {
  const nameWords = hero.name.split(' ');
  
  return (
    <section className="hero" id="hero">
      {/* KOLOM KIRI — Konten yang sudah ada (tidak diubah) */}
      <div className="hero-left">
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
          Laravel Developer | Vue.js | Next.js | Tailwind CSS | Bootstrap | MySQL | PostgreSQL | Git
        </motion.p>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>{hero.location}</span>
          <span>{hero.title}</span>
          <div>
            <a href={cv.link} target="_blank" rel="noopener" className="project-link">
              CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7V16"/>
              </svg>
            </a>
          </div>
        </motion.div>

        
      </div>

      {/* KOLOM KANAN — Foto dengan animasi */}
      <div className="hero-right">
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 1.1, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
        >
          <img 
            src={hero.photo} 
            alt={hero.name} 
            className="hero-photo"
          />
          {/* Dekorasi garis aksen di belakang foto */}
          <div className="photo-accent" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}