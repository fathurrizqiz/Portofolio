import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications } from '../data/content';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref}>
      <span className="section-label">05 — Pendidikan & Sertifikasi</span>
      
      <motion.div
        className="edu-card"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3>{education.school}</h3>
          <div className="status">{education.status}</div>
        </div>
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>{education.degree}</div>
          <div style={{ color: 'var(--text-dim)', marginTop: '0.3rem' }}>IPK: {education.gpa}</div>
          <div style={{ color: 'var(--text-dim)', marginTop: '0.3rem' }}>Skripsi: {education.skripsi}</div>
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.8rem' }}>Fokus Pembelajaran</div>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {education.focus.map(f => (
                <span key={f} style={{ padding: '0.4rem 1rem', border: '1px solid var(--border)', borderRadius: '999px', fontSize: '0.85rem' }}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="cert-grid">
        {certifications.map((cat, i) => (
          <motion.div
            key={cat.category}
            className="cert-category"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h4>{cat.category}</h4>
            {cat.items.map(item => (
              <div key={item.name} className="cert-item">
                <div className="name">{item.name}</div>
                <div className="meta">
                  <span>{item.org}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}