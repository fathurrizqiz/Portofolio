import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/content';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref}>
      <span className="section-label">03 — Proyek Pilihan</span>
      <div>
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="project"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <div className="project-header">
              <div className="year">{project.year}</div>
              <h3>{project.name}</h3>
              <div className="subtitle">{project.subtitle}</div>
              <div className="project-meta" style={{ marginTop: '1rem' }}>
                <span>{project.role}</span>
              </div>
              <div className="project-meta" style={{ marginTop: '0.5rem' }}>
                {project.stack.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="project-body">
              <div className="project-psi">
                <div className="psi-item">
                  <div className="label">Masalah</div>
                  <p>{project.problem}</p>
                </div>
                <div className="psi-item solution">
                  <div className="label">Solusi</div>
                  <p>{project.solution}</p>
                </div>
                <div className="psi-item impact">
                  <div className="label">Dampak</div>
                  <p>{project.impact}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener" className="project-link">
                  Lihat Repository
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16"/>
                  </svg>
                </a>
                
              )}
              {project.web && (
                  <a href={`https://${project.web}`} target="_blank" rel="noopener" className="project-link">
                    Lihat Website
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7V16"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}