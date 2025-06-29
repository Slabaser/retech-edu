import React from 'react';
import { Link } from 'react-router-dom';

const KitCard = ({ title, description, sdg, emoji, color = '#10B981' }) => {
  const cardContent = (
    <div
      style={{
        ...styles.card,
        boxShadow: `0 4px 0 ${color}, 4px 4px 0 ${color}`,
        transition: 'transform 0.2s ease-in-out',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div style={styles.emoji}>{emoji}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <span style={styles.tag}>🎯 {sdg}</span>
    </div>
  );

  return title === 'Akıllı Tarım Kiti' ? (
    <Link to="/agriculture-kit" style={{ textDecoration: 'none' }}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    // boxShadow removed for dynamic variant
    padding: '1.5rem',
    textAlign: 'center',
    width: '280px',
    margin: '1rem',
    border: '1px solid #000',
    minHeight: '300px',
  },
  emoji: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.2rem',
    color: '#1F2937',
    margin: '0.5rem 0',
  },
  description: {
    fontSize: '1rem',
    color: '#4B5563',
    marginBottom: '1rem',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#E0F2FE',
    color: '#0284C7',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.875rem',
  },
};

export default KitCard;