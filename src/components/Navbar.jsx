import React from 'react';
import SectionTitle from './SectionTitle';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <SectionTitle title="EcoSTEM" />
      <ul style={styles.navLinks}>
        <li><a
          href="#"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          style={styles.link}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
        >Hakkımızda</a></li>
        <li><a
          href="#"
          onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
          style={styles.link}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
        >Kitler</a></li>
        <li><a
          href="#"
          onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
          style={styles.link}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
        >SSS</a></li>
        <li><a
          href="#"
          onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
          style={styles.link}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
        >Sertifikalar</a></li>
        <li><a
          href="#"
          onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
          style={styles.link}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
        >Destek</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.1rem 1rem',
    backgroundColor: '#E0F2FE', // soft pastel blue
    color: '#111827',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '2px solid #000',
    backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    boxShadow: '4px 4px 0 #000',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center', // center vertically
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#111827',
    textDecoration: 'none',
    fontSize: '1rem',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    borderBottom: '2px solid transparent',
    paddingBottom: '2px',
    transition: 'border-color 0.2s ease',
  },
};

export default Navbar;