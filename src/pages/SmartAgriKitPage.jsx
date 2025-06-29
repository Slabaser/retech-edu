// src/pages/SmartAgriKitPage.jsx
import React from 'react';
import './smartkit.css';

const SmartAgriKitPage = () => {
  return (
    <div className="container">
      <h1 className="title">
        Akıllı Tarım Kiti
      </h1>

      <section className="section">
        <h2>Kit Nedir?</h2>
        <p>
          Akıllı Tarım Kiti, geri dönüştürülmüş elektronik atıklardan üretilmiş bileşenlerle oluşturulmuş bir STEM eğitim aracıdır. Toprağın nemini ölçerek otomatik sulama yapabilir ve sıcaklık/nem takibi ile tarımsal verimliliği öğretir.
        </p>
      </section>

      <section className="section">
        <h2>Kutu İçeriği</h2>
        <ul className="kit-list">
          <li className="kit-item">🌱 Nem sensörü - <span className="kit-label">Yazıcı kartından</span></li>
          <li className="kit-item">🌡️ DHT11 sensörü - <span className="kit-label">Dijital termometreden</span></li>
          <li className="kit-item">🧠 Arduino Nano - <span className="kit-label">USB cihazlardan</span></li>
          <li className="kit-item">💧 Mini su pompası - <span className="kit-label">Powerbank motorundan</span></li>
          <li className="kit-item">⚡ Röle Modülü - <span className="kit-label">Ev alarm sisteminden</span></li>
          <li className="kit-item">📺 LCD Ekran (16x2) - <span className="kit-label">Oyuncak parçalarından</span></li>
        </ul>
      </section>

      <section className="section">
        <h2>Hedef Kitle</h2>
        <p>
          Bu kit özellikle ortaokul ve lise düzeyindeki öğrenciler için tasarlanmıştır. Hem yazılım hem de donanım bileşenleriyle çocuklara çevresel farkındalık ve teknoloji okuryazarlığı kazandırır.
        </p>
      </section>

      <section className="section app-link-section">
        <h2>Kitinizi Takip Etmek İçin</h2>
        <p>Mobil uygulamamızla üretim ve görevlerinizi takip edin.</p>
        <a href="/mobil-uygulama" className="app-link">
          Uygulamaya Git
        </a>
      </section>
    </div>
  );
};

export default SmartAgriKitPage;
