import React from 'react';
import KitCard from './KitCard';

const kits = [
  {
    title: 'Akıllı Tarım Kiti',
    description: 'Toprak nemini ölçüp sulamayı kontrol eden sistem',
    sdg: 'Hedef 2: Açlığa Son',
    emoji: '🌱',
    color: '#A0D995',
    link: '/agriculture-kit',
  },
  {
    title: 'Hijyen Botu',
    description: 'Hareket sensörüyle sabun/su veren sistem',
    sdg: 'Hedef 3: Sağlıklı Bireyler',
    emoji: '🧼',
    color: '#AED9E0',
  },
  {
    title: 'Eğitim Destekçisi',
    description: 'Işık seviyesi ölçen ve uyarı veren masa lambası',
    sdg: 'Hedef 4: Nitelikli Eğitim',
    emoji: '📚',
    color: '#F9D67A',
  },
  {
    title: 'Su Kaçağı Uyarı Botu',
    description: 'Nem sensörüyle su kaçaklarını algılar, uyarı verir',
    sdg: 'Hedef 6: Temiz Su ve Sanitasyon',
    emoji: '🚰',
    color: '#89CFF0',
  },
  {
    title: 'Güneş Takip Sistemi',
    description: 'LDR sensörle güneşi takip edip panel döndürür',
    sdg: 'Hedef 7: Erişilebilir ve Temiz Enerji',
    emoji: '🔆',
    color: '#FFD6A5',
  },
  {
    title: 'Engel Algılayan MiniBot',
    description: 'Ultrasonik sensörle otonom hareket',
    sdg: 'Hedef 9: Sanayi, Yenilikçilik ve Altyapı',
    emoji: '🤖',
    color: '#D5AAFF',
  },
  {
    title: 'Akıllı Trafik Işığı',
    description: 'Karanlık/ışık ve ses sensörleriyle tepki veren sistem',
    sdg: 'Hedef 11: Sürdürülebilir Şehirler',
    emoji: '🚦',
    color: '#FFABAB',
  },
  {
    title: 'Karbon Sayacı',
    description: 'Sıcaklık ve gaz sensörü ile çevre analizi yapan kit',
    sdg: 'Hedef 13: İklim Eylemi',
    emoji: '🌍',
    color: '#9AD0C2',
  },
];

const KitSection = () => {
  return (
    <section id="kits" style={styles.section}>
        
      <h2 style={styles.title}>Görev Tabanlı Robotik Kitler</h2>
      <div style={styles.grid}>
        {kits.map((kit, index) => (
          <KitCard
            key={index}
            title={kit.title}
            description={kit.description}
            sdg={kit.sdg}
            emoji={kit.emoji}
            color={kit.color}
            link={kit.link}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 2rem',
    // backgroundColor removed
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#1F2937',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
};

export default KitSection;