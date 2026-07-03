import React from 'react';
import { TrendingUp } from 'lucide-react';
import './GoldPrice.css';

const priceDataList = [
  { type: '순금 (24K)', buy: '382,000', sell: '345,000' },
  { type: '18K', buy: '제품시세', sell: '254,000' },
  { type: '14K', buy: '제품시세', sell: '197,000' },
];



const GoldPrice = () => {
  const today = new Date();
  const dateString = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 기준`;

  return (
    <section id="goldprice" className="section gold-price">
      <div className="container">
        <h2 className="section-title">오늘의 금 시세</h2>
        
        <div className="price-dashboard">
          <div className="price-header">
            <h3><TrendingUp color="var(--color-gold)" /> 실시간 국내 금 시세 (3.75g)</h3>
            <span className="price-date">{dateString}</span>
          </div>

          <div className="price-content-grid">
            <div className="price-cards">
              {priceDataList.map((item, index) => (
                <div key={index} className="price-card">
                  <div className="price-card-title">{item.type}</div>
                  <div className="price-row buy">
                    <span>살 때 (Buy)</span>
                    <span>{item.buy} 원</span>
                  </div>
                  <div className="price-row sell">
                    <span>팔 때 (Sell)</span>
                    <span>{item.sell} 원</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '15px', color: 'var(--color-gray)', fontSize: '0.85rem', gridColumn: '1 / -1' }}>
              * 위 시세는 참고용 가상 데이터이며 실제 매장 방문 시 시세와 다를 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldPrice;
