import { useState } from 'react';

const documents = [
  {
    id: 1,
    category: 'pengalaman',
    title: 'Web Developer Intern di RS Hermina Daan Mogot',
    date: '2025-06-20',
    description: 'Melakukan magang sebagai web developer di rumah sakit Hermina Daan Mogot, mengembangkan aplikasi web untuk meningkatkan efisiensi operasional.',
    image: '/public/magang.jpeg',
    certificate: '/certificates/web-developer-intern.pdf'
  },
  {
    id: 2,
    category: 'prestasi',
    title: 'Kompetensi Assosiate Data Scientist BNSP',
    date: '2025-07-20',
    description: 'Mendapatkan sertifikasi kompetensi Associate Data Scientist dari BNSP, membuktikan kemampuan dalam analisis data dan penerapan machine learning.',
    image: '/public/BNSP.jpeg',
    certificate: '/certificates/workshop-react.pdf'
  },
  {
    id: 3,
    category: 'pengalaman',
    title: 'Eichar - SIM Diklat Berbasis AI',
    date: '2026-03-15',
    description: 'Mengembangkan sistem informasi manajemen diklat dengan analisis sentimen menggunakan IndoBERT.',
    image: '/public/HRD.jpeg',
    certificate: '/certificates/best-project.pdf'
  },
  {
    id: 4,
    category: 'pengalaman',
    title: 'Eye Health - berbasis CNN',
    date: '2024-03-15',
    description: 'Membangun sebuah aplikasi deteksi kesehatan mata dengan algoritma CNN',
    image: '/public/Eye Health.jpeg',
    certificate: '/certificates/best-project.pdf'
  },
  {
    id: 5,
    category: 'pengalaman',
    title: 'Improvisasi Eye Health - berbasis CNN kepada lingkungan',
    date: '2024-03-15',
    description: 'Menjelaskan keunggulan serta tahapan - tahapan terkait penggunaan sistem Eye Health',
    image: '/public/diskusi.jpeg',
    certificate: '/certificates/best-project.pdf'
  },
  {
    id: 6,
    category: 'pengalaman',
    title: 'Kunjungan Industri di JSC ( Jakarta Smart City )',
    date: '2024-07-15',
    description: 'Kunjungan industri ke sebuah perusahaan yang terletak di jakarta pusat, kunjungan ini untuk mempelajari bagaimana teknologi dapat membantu dalam kebutuhan sehari - hari',
    image: '/public/KI.jpeg',
    certificate: '/certificates/best-project.pdf'
  },
  {
    id: 7,
    category: 'pengalaman',
    title: 'Kunjungan Industri di BSSN ( Badan Cyber dan Sandi Negara )',
    date: '2024-07-15',
    description: 'Kunjungan industri ke sebuah perusahaan yang terletak di jakarta selatan, kunjungan ini untuk mempelajari bagaimana menjaga keamanan dalam sebuah sistem dari cyber',
    image: '/public/badan cyber.jpeg',
    certificate: '/certificates/best-project.pdf'
  },
];

export default function Documentation() {
  const [filter, setFilter] = useState('semua');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const filteredDocs = filter === 'semua' 
    ? documents 
    : documents.filter(doc => doc.category === filter);

  const categories = [
    { value: 'semua', label: 'Semua' },
    { value: 'pengalaman', label: 'pengalaman' },
    { value: 'prestasi', label: 'prestasi' }
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
                  {doc.category === 'pengalaman' ? 'pengalaman' : 'prestasi'}
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