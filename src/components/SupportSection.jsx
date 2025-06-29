import React from 'react';


const About = () => {
  return (
    <section id="support" className="about-section" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 2rem',
      textAlign: 'center',
    }}>
      <div className="about-text" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '700' }}>Projeye Destek Olun</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.5' }}>
          Elektronik atıkları eğitime dönüştürme hedefimize katkı sağlamak ister misiniz? Aşağıdaki bağış seçeneklerinden biriyle destek olabilirsiniz.
        </p>
        <div className="donation-options" style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div
            onMouseEnter={(e) => e.currentTarget.querySelector('button').style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.querySelector('button').style.transform = 'scale(1)'}
          >
            <button style={{ backgroundColor: '#FACC15', color: 'black', padding: '0.5rem 1rem', borderRadius: '8px', border: '2px solid black', transition: 'transform 0.2s ease-in-out' }}>💳 Bireysel Bağış</button>
            <p style={{ marginTop: '0.5rem' }}>Küçük bir katkıyla büyük bir fark yaratabilirsiniz.</p>
          </div>
          <div
            onMouseEnter={(e) => e.currentTarget.querySelector('button').style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.querySelector('button').style.transform = 'scale(1)'}
          >
            <button style={{ backgroundColor: '#FACC15', color: 'black', padding: '0.5rem 1rem', borderRadius: '8px', border: '2px solid black', transition: 'transform 0.2s ease-in-out' }}>🏢 Kurumsal Destek</button>
            <p style={{ marginTop: '0.5rem' }}>İşletmenizi sosyal sorumlulukla öne çıkarın.</p>
          </div>
          <div
            onMouseEnter={(e) => e.currentTarget.querySelector('button').style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.querySelector('button').style.transform = 'scale(1)'}
          >
            <button style={{ backgroundColor: '#FACC15', color: 'black', padding: '0.5rem 1rem', borderRadius: '8px', border: '2px solid black', transition: 'transform 0.2s ease-in-out' }}>♻️ E-Atık Bağışı</button>
            <p style={{ marginTop: '0.5rem' }}>Kullanmadığınız donanımları geleceğe dönüştürün.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;