import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppIntro = () => {
  const navigate = useNavigate();
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Mobil Uygulama ile Tanışın</h2>
      <p style={styles.text}>
        EcoSTEM mobil uygulaması, öğrencilerin robotik kitlerle olan gelişim sürecini takip etmelerini sağlar. 
        Görevleri tamamlayan öğrenciler başarı rozetleri kazanır ve tüm görevleri bitirdiklerinde sertifika alabilirler.
      </p>
      <button 
        style={styles.button}
        onClick={() => navigate('/mobil-uygulama')}
      >
        Uygulamayı İncele
      </button>
    </section>
  );
};

const styles = {
  container: {
    padding: '3rem 2rem',
    backgroundColor: '#F9FAFB',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#1F2937',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#4B5563',
    maxWidth: '600px',
    margin: '0 auto',
  },
  button: {
    marginTop: '1.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#F59E0B',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  }
};

export default AppIntro;