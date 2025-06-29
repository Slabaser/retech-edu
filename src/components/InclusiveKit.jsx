import React from 'react';
import inclusiveKitImg from '../assets/inclusive.png';
const InclusiveKit = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Erişilebilir Robotik: Sesli Rehberli Kit</h2>
      <p style={styles.subtitle}>
        Görme engelli bireyler için tasarlanmış bu kit, sesli yönlendirme ile adım adım robotik görevleri öğretir. Tüm parçalar dokunsal olarak ayırt edilebilir ve Braille etiketlidir.
      </p>
      <div style={styles.card}>
        <img
          src={inclusiveKitImg}
          alt="Sesli Rehberli Robotik Kit"
          style={styles.image}
        />
        <ul style={styles.list}>
          <li>🔊 Sesli görev anlatımı (mobil uygulama üzerinden)</li>
          <li>🧱 Dokunsal işaretli bileşenler (Braille ve kabartmalı yüzeyler)</li>
          <li>🧭 Kablo yönlendirme şablonları</li>
          <li>🚦 Basit görev: Motoru çalıştır, buzzer'ı duy</li>
        </ul>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '4rem 1rem',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '1rem',
    marginTop: '2rem',
    textAlign: 'center',
  },
  subtitle: {
    maxWidth: '700px',
    margin: '0 auto 2rem',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    color: '#334155',
    fontFamily: 'Inter, sans-serif',
    padding: '0 1rem',
  },
  card: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '1rem',
    border: '2px solid black',
  },
  list: {
    listStyle: 'none',
    padding: '1rem',
    margin: 0,
    textAlign: 'left',
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.8',
    fontFamily: 'Inter, sans-serif',
    border: '2px dotted black',
    borderRadius: '0.5rem',
  }
};

export default InclusiveKit;