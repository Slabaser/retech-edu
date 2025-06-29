import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <h2 style={styles.title}>{title}</h2>
  );
};

const styles = {
  title: {
    fontSize: '2.5rem',
    color: 'var(--retro-primary)',
    textAlign: 'center',
    marginBottom: '2rem',
    fontFamily: "'Space Grotesk', sans-serif",
    textShadow: '2px 2px 0 var(--retro-accent)',
  },
};

export default SectionTitle;