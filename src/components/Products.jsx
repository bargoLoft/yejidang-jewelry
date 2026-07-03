import React from 'react';
import { Baby, Award, Banknote, Watch, Sparkles, Heart } from 'lucide-react';
import './Products.css';

const productsData = [
  {
    id: 1,
    title: '아기 반지 (백일/돌)',
    desc: '소중한 아이의 첫 생일을 축하하는 의미 있는 순금 반지',
    icon: <Baby size={32} />,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: '순금 상패 및 트로피',
    desc: '감사와 존경의 마음을 영원히 간직할 수 있는 순금 상패',
    icon: <Award size={32} />,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: '골드바',
    desc: '가장 안전하고 확실한 투자, 순도 99.99% 프레스 골드바',
    icon: <Banknote size={32} />,
    image: 'https://images.unsplash.com/photo-1621252179027-9ec4423bd114?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: '고품격 예물 & 시계',
    desc: '평생을 약속하는 아름다운 순간을 빛내줄 다이아몬드와 시계',
    icon: <Watch size={32} />,
    image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: '순금 목걸이 & 팔찌',
    desc: '세련된 디자인과 변치 않는 가치를 지닌 순금 액세서리',
    icon: <Sparkles size={32} />,
    image: 'https://images.unsplash.com/photo-1602752250014-4113e65451bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: '커플링 & 패션 주얼리',
    desc: '트렌디한 감성과 정교한 디테일이 돋보이는 14K/18K 주얼리',
    icon: <Heart size={32} />,
    image: 'https://images.unsplash.com/photo-1515562141207-7a8ea4114e17?q=80&w=800&auto=format&fit=crop'
  }
];

const Products = () => {
  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">컬렉션</h2>
        
        <div className="products-grid">
          {productsData.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={item.image} alt={item.title} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-icon">
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
