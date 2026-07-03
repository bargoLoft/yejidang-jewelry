import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content animate-fade-in">
        <p className="hero-subtitle">Premium Jewelry & Watches</p>
        <h1 className="hero-title">
          종로 귀금속의 자부심, <span>예지당</span>
        </h1>
        <p className="hero-desc">
          오랜 시간 변치 않는 가치와 신뢰를 바탕으로<br/>
          당신의 가장 빛나는 순간을 함께합니다.
        </p>
        <a href="#products" className="hero-btn">
          컬렉션 보기
        </a>
      </div>
    </section>
  );
};

export default Hero;
