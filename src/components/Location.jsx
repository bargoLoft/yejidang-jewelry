import React from 'react';
import { MapPin, Phone, TrainFront } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="section location-section">
      <div className="container">
        <h2 className="section-title">오시는 길</h2>
        <div className="location-info">
          <h4>예지당 매장 안내</h4>
          <div className="info-item">
            <MapPin className="info-icon" size={28} />
            <div className="info-text">
              <strong>주소</strong>
              <p>서울시 종로구 종로3가 9번지<br/>아름다운주얼리 도매상가 11호 예지당</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, fontWeight: 'bold' }}>지하철</div>
            <div className="info-text">
              <strong>지하철 안내</strong>
              <p>지하철 종로3가역 (1호선, 3호선, 5호선)<br/>1번 출구에서 종로 2가 방향 50m<br/>버스정류장 앞</p>
            </div>
          </div>
          <div className="info-item">
            <Phone className="info-icon" size={28} />
            <div className="info-text">
              <strong>연락처</strong>
              <p>TEL : (02) 2273-6464<br/>FAX : (02) 2273-6464<br/>H.P : 010-8638-7821 / 010-3265-8294</p>
            </div>
          </div>
          
          <div className="map-container">
            <iframe 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '8px' }} 
              src="https://maps.google.com/maps?q=서울시%20종로구%20종로3가%209&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen
              loading="lazy"
              title="예지당 위치"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
