import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/content';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="contact" ref={ref}>
      <span className="section-label">06 — Mari Bekerja Sama</span>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Punya <span className="serif">ide?</span><br />Hubungi saya.
      </motion.h2>

      <motion.a
        href={`mailto:${profile.email}`}
        className="contact-email"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {profile.email}
      </motion.a>

      <motion.div
        className="contact-socials"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
        <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        <a href="#hero" style={{ marginLeft: 'auto' }}>Kembali ke atas ↑</a>
      </motion.div>
    </section>
  );
}