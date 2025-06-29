
import certificateImage from '../assets/certificate.png';


import React from 'react';

const CertificateDemo = () => {
  return (
    <section id="certificates" style={styles.section}>
      <h2 style={styles.title}>Sertifika Kazanımı</h2>
      <p style={styles.description}>
        Öğrenciler görev tabanlı kitleri tamamladıkça başarıları mobil uygulama üzerinden takip edilir. Tüm görevler tamamlandığında otomatik olarak dijital bir sertifika kazanılır.
      </p>
      <img
        src={certificateImage}
        alt="Sertifika Örneği"
        style={styles.image}
      />
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#1F2937',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.1rem',
    color: '#4B5563',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  image: {
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    maxWidth: '50%',
    height: 'auto',
  },
};

export default CertificateDemo;