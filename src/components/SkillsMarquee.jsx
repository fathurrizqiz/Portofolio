import { skills } from '../data/content';
import './SkillsMarquee.css';

const categoryColors = {
  'Bahasa Pemrograman': '#ff5c1f',
  'Prinsip & Metodologi': '#a78bfa',
  'Frontend': '#4fc3f7',
  'Backend': '#fb7185',
  'Database & DevOps': '#34d399',
};

export default function SkillsMarquee() {
  const entries = Object.entries(skills);

  const row1 = [];
  const row2 = [];
  entries.forEach(([cat, items], idx) => {
    items.forEach((name) => {
      (idx % 2 === 0 ? row1 : row2).push({ name, cat });
    });
  });

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="skills-kicker">// TECH STACK</span>
        <h2 className="skills-title">Yang Aku Gunakan Sehari-hari</h2>
      </div>

      <div className="marquee-wrapper">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
}

function MarqueeRow({ items, reverse }) {
  const loop = [...items, ...items];

  return (
    <div className={`marquee-row ${reverse ? 'is-reverse' : ''}`}>
      <div className="marquee-track">
        {loop.map((skill, i) => (
          <span className="skill-chip" key={`${skill.name}-${i}`}>
            <span
              className="skill-dot"
              style={{ background: categoryColors[skill.cat] }}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}