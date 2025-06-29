import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      <div
        className="about-card"
        style={{
          backgroundColor: '#fff0f6',
          border: '2px solid black',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '800px',
          boxShadow: '4px 4px 0 black',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '1000' }}>
          Proje Hakkında
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          “Atıktan Akıllı Ürüne” projesi, elektronik atıkların dönüştürülerek STEM temelli eğitim kitlerine
          çevrilmesini amaçlayan sürdürülebilir bir girişimdir. Bu kitler, öğrencilerin hem teknik becerilerini
          geliştirmelerine hem de çevre bilinci kazanmalarına katkı sağlar. Her kit, gerçek dünya problemlerini
          içeren görevlerle birlikte gelir ve öğrencilerin proje tabanlı öğrenme ile yaratıcı çözümler üretmesini destekler.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          Projemizin bir parçası olan mobil uygulama, öğrencilerin eğitim kitleriyle ilerlemelerini takip etmelerini,
          görevleri tamamladıkça rozetler kazanmalarını ve tüm görevleri başarıyla tamamladıklarında dijital bir sertifika
          almalarını sağlar. Uygulama aynı zamanda öğretmenlerin öğrenci gelişimini izlemesine olanak tanıyarak eğitsel
          etkiyi artırır. Proje, Sanayi, Yenilikçilik ve Altyapı hedefi başta olmak üzere birçok sürdürülebilir kalkınma
          hedefine doğrudan katkı sunar.
        </p>
      </div>
    </section>
  );
};

export default About;
