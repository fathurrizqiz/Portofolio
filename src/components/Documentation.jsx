import { useState } from 'react';

const documents = [
  {
    id: 1,
    category: 'Pengalaman',
    title: 'Web Developer Intern di RS Hermina Daan Mogot',
    date: '2025-07-20',
    description: 'Melakukan magang sebagai web developer di rumah sakit Hermina Daan Mogot, mengembangkan aplikasi web untuk meningkatkan efisiensi operasional.',
    image: '/images/magang/web-developer-intern.jpg',
    certificate: '/certificates/web-developer-intern.pdf'
  },
  {
    id: 2,
    category: 'Pengalaman',
    title: 'Kompetensi Assosiate Data Scientist BNSP',
    date: '2024-05-20',
    description: 'Mendapatkan sertifikasi kompetensi Associate Data Scientist dari BNSP, membuktikan kemampuan dalam analisis data dan penerapan machine learning.',
    image: '/images/kegiatan/workshop-react.jpg',
    certificate: '/certificates/workshop-react.pdf'
  },
  {
    id: 3,
    category: 'prestasi',
    title: 'Best Project Hackathon 2024',
    date: '2024-07-10',
    description: 'Memenangkan kategori Best Project dalam hackathon nasional dengan aplikasi manajemen tugas berbasis AI.',
    image: '/images/prestasi/hackathon.jpg',
    certificate: '/certificates/best-project.pdf'
  },
  {
    id: 4,
    category: 'kegiatan',
    title: 'Seminar UI/UX Design',
    date: '2024-08-05',
    description: 'Berpartisipasi dalam seminar internasional tentang tren terbaru dalam desain antarmuka pengguna.',
    image: '/images/kegiatan/seminar-uiux.jpg',
    certificate: '/certificates/seminar-uiux.pdf'
  },
  {
    id: 5,
    category: 'prestasi',
    title: 'Sertifikasi Frontend Developer',
    date: '2024-09-12',
    description: 'Lulus sertifikasi profesional Frontend Developer dengan nilai memuaskan dari lembaga bersertifikat.',
    image: '/images/prestasi/sertifikasi.jpg',
    certificate: '/certificates/frontend-cert.pdf'
  }
];

export default function Documentation() {
  const [filter, setFilter] = useState('semua');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const filteredDocs = filter === 'semua' 
    ? documents 
    : documents.filter(doc => doc.category === filter);

  const categories = [
    { value: 'semua', label: 'Semua' },
    { value: 'kegiatan', label: 'Kegiatan' },
    { value: 'magang', label: 'Prestasi' }
  ];

  return (
    <section id="documentation" className="documentation">
      <div className="container">
        <h2 className="section-title">Dokumentasi</h2>
        <p className="section-subtitle">Kegiatan dan Prestasi</p>

        {/* Filter Buttons */}
        <div className="doc-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="docs-grid">
          {filteredDocs.map((doc) => (
            <div 
              key={doc.id} 
              className="doc-card"
              onClick={() => setSelectedDoc(doc)}
            >
              <div className="doc-image">
                <img src={doc.image} alt={doc.title} />
                <span className={`doc-badge ${doc.category}`}>
                  {doc.category === 'Kegiatan' ? 'Kegiatan' : 'Pengalaman'}
                </span>
              </div>
              <div className="doc-content">
                <h3>{doc.title}</h3>
                <p className="doc-date">{new Date(doc.date).toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
                <p className="doc-description">{doc.description}</p>
                <button className="view-btn">Lihat Detail →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail */}
        {selectedDoc && (
          <div className="modal-overlay" onClick={() => setSelectedDoc(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedDoc(null)}>✕</button>
              <img src={selectedDoc.image} alt={selectedDoc.title} className="modal-image" />
              <div className="modal-body">
                <span className={`doc-badge ${selectedDoc.category}`}>
                  {selectedDoc.category === 'prestasi' ? 'Prestasi' : 'Pengalaman'}
                </span>
                <h2>{selectedDoc.title}</h2>
                <p className="modal-date">
                  {new Date(selectedDoc.date).toLocaleDateString('id-ID', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="modal-description">{selectedDoc.description}</p>
                {selectedDoc.certificate && (
                  <a 
                    href={selectedDoc.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    📄 Lihat Sertifikat
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}