import { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 768 : false
  );

  useEffect(() => {
    const checkSize = () => setEnabled(window.innerWidth > 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      setHover(!!e.target.closest('a, button, .project, .skill-card, .stair-step, .cert-item'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div className={`cursor-ring ${hover ? 'hover' : ''}`} style={{ left: pos.x, top: pos.y }} />
    </>
  );
}