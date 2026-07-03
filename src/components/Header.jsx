import React, { useState, useEffect } from 'react';
import LogoIcon from './LogoIcon';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <LogoIcon size={32} />
          예지당<span>.</span>
        </a>
        
        <nav>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>소개</a></li>
            <li><a href="#products" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('products'); }}>컬렉션</a></li>
            <li><a href="#goldprice" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('goldprice'); }}>오늘의 시세</a></li>
          </ul>
        </nav>

        <a href="#footer" className="contact-btn" onClick={(e) => { e.preventDefault(); scrollTo('footer'); }}>
          문의하기
        </a>
      </div>
    </header>
  );
};

export default Header;
