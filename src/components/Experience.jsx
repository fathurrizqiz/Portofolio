import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/content';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref}>
      <span className="section-label">04 — Perjalanan Karier</span>
      <div className="staircase">
        <svg className="staircase-bg" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="stairGrad" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
            </linearGradient>
          </defs>
          {/* Garis tangga diagonal */}
          <line x1="0" y1="580" x2="1000" y2="20" stroke="url(#stairGrad)" strokeWidth="2" strokeDasharray="4 8" />
          {/* Step indicators */}
          {experience.map((_, i) => {
            const x = 100 + i * 200;
            const y = 580 - i * 180;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill="#fff" opacity="0.3" />
                <circle cx={x} cy={y} r="12" fill="none" stroke="#fff" strokeWidth="1" opacity="0.2" />
              </g>
            );
          })}
        </svg>

        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="stair-step"
            style={{ '--step': i }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.3 + 0.3, duration: 0.8 }}
          >
            <div className="stair-number">0{i + 1}</div>
            <div>
              <div className="period">{exp.period}</div>
              <div style={{ fontSize: '0.8rem', color: '#666', letterSpacing: '0.2em' }}>STEP {i + 1}</div>
            </div>
            <div>
              <h3>{exp.company}</h3>
              <div className="role">{exp.role}</div>
              <ul>
                {exp.achievements.map((a, j) => <li key={j}>{a}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Pesan jika pengalaman akan bertambah */}
        <motion.div
          style={{
            marginLeft: `${experience.length * 60}px`,
            padding: '1.5rem 2.5rem',
            border: '1px dashed rgba(255,255,255,0.15)',
            color: 'var(--text-dim)',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '400px'
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: experience.length * 0.3 + 0.6, duration: 1 }}
        >
          Perjalanan terus menanjak...
        </motion.div>
      </div>
    </section>
  );
}