import React from 'react';
import LogoIcon from './LogoIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <LogoIcon size={32} style={{ marginRight: '10px' }} />
              예지당<span>.</span>
            </div>
            <p>귀금속 · 시계 · 예물 전문점<br/>아름다운 당신을 더욱 빛나게 합니다.</p>
          </div>
          
          <div className="footer-info">
            <div>
              <h5>Contact & Location</h5>
              <p><strong>대표자</strong> 박옥례</p>
              <p><strong>주소</strong> 서울시 종로구 종로3가 9번지 아름다운주얼리 도매상가 11호</p>
              <p><strong>전화</strong> (02) 2273-6464</p>
              <p><strong>팩스</strong> (02) 2273-6464</p>
              <p><strong>모바일</strong> 010-8638-7821 / 010-3265-8294</p>
            </div>
            <div>
              <h5>Bank Info</h5>
              <p style={{ marginTop: '10px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                <strong style={{ display: 'block', marginBottom: '5px', color: 'var(--color-gold)' }}>입금계좌안내</strong>
                국민은행<br/>
                <span style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>413037-01-002447</span><br/>
                예금주: 박옥례
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} 예지당 (Yeji Dang). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
