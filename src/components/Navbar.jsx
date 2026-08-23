import { useEffect, useState } from 'react';

export default function Navbar() {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">F.RIZQI P.P</div>
      <div className="time">{time} WIB</div>
    </nav>
  );
}