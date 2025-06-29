import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" style={styles.container}>
      <div
        style={{
          backgroundColor: '#fff0f6',
          backgroundImage: 'radial-gradient(#f9d5ec 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          border: '2px solid black',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '4px 4px 0 black',
        }}
      >
        <h2 style={styles.title}>Sıkça Sorulan Sorular</h2>
        <div style={styles.faqItem}>
          <h4 style={styles.question}>Bu kitler kimler için uygun?</h4>
          <p style={styles.answer}>
            10 yaş ve üzeri öğrenciler için uygundur. Kitler farklı zorluk seviyelerine göre tasarlanmıştır.
          </p>
        </div>
        <div style={styles.faqItem}>
          <h4 style={styles.question}>E-atık parçaları güvenli mi?</h4>
          <p style={styles.answer}>
            Evet. Tüm parçalar test edilip güvenli hale getirilmiştir ve yalnızca düşük voltajlı elemanlar kullanılmıştır.
          </p>
        </div>
        <div style={styles.faqItem}>
          <h4 style={styles.question}>Mobil uygulama ne işe yarıyor?</h4>
          <p style={styles.answer}>
            Mobil uygulama, öğrencilerin görev takibini yapmasını ve başarılarını sertifikaya dönüştürmesini sağlar.
          </p>
        </div>
        <div style={styles.faqItem}>
          <h4 style={styles.question}>Kitleri nasıl temin edebilirim?</h4>
          <p style={styles.answer}>
            Web sitemiz üzerinden başvuru yaparak veya eğitim kurumları aracılığıyla temin edebilirsiniz.
          </p>
        </div>
        <div style={styles.faqItem}>
          <h4 style={styles.question}>Kendi parçamı kiti tamamlamak için kullanabilir miyim?</h4>
          <p style={styles.answer}>
            Evet, rehberlik doğrultusunda güvenli parçalarla kendi e-atıklarınızı değerlendirebilirsiniz.
          </p>
        </div>
        <div style={styles.faqItem}>
          <h4 style={styles.question}>Kullanım kılavuzu var mı?</h4>
          <p style={styles.answer}>
            Tüm kitler için adım adım kullanım kılavuzu ve görev rehberi mobil uygulamada ve web sitemizde sunulmaktadır.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '3rem 2rem',
    maxWidth: '1000px',
    margin: '2rem auto',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: '2rem',
  },
  faqItem: {
    maxWidth: '700px',
    margin: '0 auto 2rem',
  },
  question: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#111827',
  },
  answer: {
    fontSize: '1rem',
    color: '#4B5563',
    marginTop: '0.5rem',
  },
};

export default FAQ;