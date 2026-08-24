
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'projects', label: 'Proyek' },
  { id: 'experience', label: 'Karier' },
  { id: 'education', label: 'Pendidikan' },
  { id: 'documentation', label: 'Dokumentasi' },
  { id: 'contact', label: 'Kontak' }
];

export default function Navbar() {
  const [time, setTime] = useState('');
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">F.RIZQI P.P</div>

      <div className="nav-links desktop-only">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={"#" + s.id}
              className={isActive ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleClick(s.id);
              }}
            >
              {s.label}
            </a>
          );
        })}
      </div>

      <div className="time desktop-only">{time} WIB</div>

      <button
        className="nav-toggle mobile-only"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Buka menu navigasi"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={"#" + s.id}
                className={isActive ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(s.id);
                }}
              >
                {s.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
