import React from 'react';
import { Link } from 'react-router-dom';

const MobileApp = () => {
  const screenshots = [
    '.../assets/ss5.png',
    '.../assets/ss4.png',
    '.../assets/ss3.png',
    '.../assets/ss2.png',
    '.../assets/ss1.png',
    '.../assets/ss6.png',
    '.../assets/ss7.png',
    
  ];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fffbe6' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
        Mobil Uygulamamız EcoSTEM ile Tanışın!
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
        Mobil uygulamamız öğrencilerin robotik kitlerle olan ilerlemelerini takip eder. Görev tamamlama, rozet kazanımı ve sertifika alımı gibi birçok özelliğe sahiptir.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10rem',
        justifyItems: 'center',
        padding: '1rem'
      }}>
        {screenshots.map((src, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={src}
              alt={`Uygulama ekranı ${index + 1}`}
              style={{
                width: '100%',
                maxWidth: '240px',
                borderRadius: '10px',
                border: 'none'
              }}
            />
            {index === 0 && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
                Kullanıcı giriş ekranı. Öğrenci ve öğretmen giriş seçenekleri sunulurken, kayıt olmak isteyen kullanıcılar için ayrı bir buton yer alır.
              </p>
            )}
            {index === 1 && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
                Uygulamanın ana ekranında, kullanıcıları bekleyen birçok özellik yer alır: Harita, bağışlanan eşyaların takibi, CO₂ tasarrufu, ulaşılan çocuk sayısı, STEM eğitim modülü ve kazanılan başarımlar gibi işlevlere erişim sağlar.
              </p>
            )}
            {index === 2 && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
                “Başarılarım” ekranı, öğrencilerin uygulama içindeki ilerlemelerini takip ettiği bölümdür. Kazanılan rozet sayısı, toplam rozetler ve tamamlanma yüzdesi gibi istatistikler gösterilir. Ayrıca, her rozetin açıklaması ve kazanım tarihiyle birlikte görselleştirilmiş hali sunulur.
              </p>
            )}
            {index === 3 && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
                “Toplumsal Etki” ekranı, projenin ölçülebilir çıktılarının sergilendiği yerdir. Kaç STEM kiti üretildiği, ne kadar e-atık toplandığı, ulaşılan çocuk sayısı, kazanılan rozet ve sertifika gibi veriler burada kullanıcıya sunulur.
              </p>
            )}
            {index === 4 && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
                Geri dönüşüm noktaları haritası ile kullanıcılar, en yakın e-atık kutusunu bulabilir. Haritada yer alan işaretçilere tıklayarak, o noktadan kaç STEM kiti üretildiğini ve ulaşılan çocuk sayısını görebilirler. Bu özellik, kullanıcıların çevreye katkılarını somut bir şekilde takip etmelerini sağlar.
              </p>
            )}
            {index === 5 && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
                “Kitini Takip Et” ekranında kullanıcı, projeye katkı sağladığı robotik kitleri ve bu kitlerin ilişkili olduğu Sürdürülebilir Kalkınma Amaçlarını görebilir. Her kitin başlığı ve hangi hedefe hizmet ettiği belirtilmiştir. Bu ekran, öğrencilerin katkı sağladıkları alanlar hakkında farkındalık kazanmalarını hedefler.
              </p>
            )}
            {index === 6 && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
                “Görev Atama” ekranı, öğretmenlerin öğrencilere bireysel görevler tanımlamasını sağlar. Her görev için başlık, açıklama, tarih aralığı, ödül ve zorluk seviyesi belirlenebilir. Bu panel, öğrencilerin kişisel gelişimlerini destekleyen görevlerle daha motive bir şekilde ilerlemelerini amaçlar.
              </p>
            )}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Uygulamayı İndir</h2>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>Mobil uygulamayı QR kodu okutarak cihazınıza kolayca indirebilirsiniz.</p>
        <img
          src=".../assets/qr-download.png"
          alt="QR Kod ile indir"
          style={{ width: '150px', height: '150px' }}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#ffce00',
          color: '#000',
          fontWeight: 'bold',
          textDecoration: 'none',
          border: '2px solid black',
          borderRadius: '8px',
          transition: 'transform 0.2s',
          display: 'inline-block'
        }} className="home-link">
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default MobileApp;