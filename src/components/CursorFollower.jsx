import { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      if (e.target.closest('a, button, .project, .skill-card, .stair-step, .cert-item')) {
        setHover(true);
      } else {
        setHover(false);
      }
    };
    
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (window.innerWidth <= 768) return null;

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div className={`cursor-ring ${hover ? 'hover' : ''}`} style={{ left: pos.x, top: pos.y }} />
    </>
  );
}