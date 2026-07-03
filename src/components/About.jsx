import React from 'react';
import { MapPin, Phone, TrainFront } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">가게 소개</h2>
        
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
              alt="예지당 대표 박옥례" 
              className="about-image"
            />
            <div className="about-experience">
              <span className="years">Trust</span>
              <span className="text">Since 199X</span>
            </div>
          </div>
          
          <div className="about-content">
            <h3>정직과 신뢰로 쌓아온<br/>종로 귀금속의 명가</h3>
            <p>
              안녕하십니까, 예지당 대표 박옥례입니다.<br/>
              저희 예지당은 종로 아름다운주얼리 도매상가에서 오랜 기간 고객님들과 함께 해왔습니다.
            </p>
            <p>
              변하지 않는 금의 가치처럼, 고객님을 향한 저희의 정직한 마음도 변치 않겠습니다. 
              최고 품질의 귀금속과 예물, 그리고 투명하고 합리적인 시세로 언제나 만족을 드리는 예지당이 되겠습니다.
            </p>
            <div className="about-signature">
              대표 박옥례 올림
            </div>
          </div>
        </div>

        <div className="location-info">
          <h4>찾아오시는 길</h4>
          <div className="info-item">
            <MapPin className="info-icon" size={24} />
            <div className="info-text">
              <strong>주소</strong>
              <p>서울시 종로구 종로3가 9번지 아름다운주얼리 도매상가 11호 예지당</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, fontWeight: 'bold' }}>지하철</div>
            <div className="info-text">
              <strong>지하철 안내</strong>
              <p>지하철 종로3가역 (1호선, 3호선, 5호선) 1번 출구에서 종로 2가 방향 50m 버스정류장 앞</p>
            </div>
          </div>
          <div className="info-item">
            <Phone className="info-icon" size={24} />
            <div className="info-text">
              <strong>연락처</strong>
              <p>TEL : (02) 2273-6464<br/>FAX : (02) 2273-6464<br/>H.P : 010-8638-7821 / 010-3265-8294</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
