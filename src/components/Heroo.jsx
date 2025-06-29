import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>EcoSTEM</h1>
      <p style={styles.subtitle}>E-atıktan robotik eğitime uzanan yolculuk</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Projeyi Keşfet
      </button>
      <div style={styles.badgeContainer}>
        <div style={{ ...styles.badge, backgroundColor: '#FDE68A' }}>+150 Kit Teslimi</div>
        <div style={{ ...styles.badge, backgroundColor: '#A7F3D0' }}>%92 Memnuniyet</div>
        <div style={{ ...styles.badge, backgroundColor: '#BFDBFE' }}>STEM Odaklı Eğitim</div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: 'center',
    padding: '4rem 2rem',
    minHeight: '100vh',
    backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    backgroundColor: '#fafafa',
    fontFamily: "'Space Grotesk', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '4.5rem',
    marginBottom: '1.5rem',
    color: '#111827',
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '2.5rem',
    color: '#4B5563',
  },
  button: {
    backgroundColor: '#FBBF24',
    color: '#111827',
    padding: '0.75rem 1.5rem',
    border: '2px solid #000',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'transform 0.2s ease',
  },
  badgeContainer: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badge: {
    padding: '0.4rem 0.8rem',
    borderRadius: '12px',
    border: '1px solid #000',
    fontSize: '0.85rem',
    fontWeight: 'normal',
    fontFamily: "'Space Grotesk', sans-serif",
    backgroundClip: 'padding-box',
  }
};

export default Hero;