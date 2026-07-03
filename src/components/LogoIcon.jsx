import React from 'react';

const LogoIcon = ({ size = 28, style }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={style}>
    {/* Orange crescent shape */}
    <path 
      d="M 50 15 A 35 35 0 0 0 35 80 A 35 35 0 0 0 80 65" 
      stroke="#E66A23" 
      strokeWidth="20" 
      fill="none" 
      strokeLinecap="round"
    />
    {/* Blue oval shape */}
    <ellipse cx="55" cy="45" rx="16" ry="26" fill="#283583" transform="rotate(30 55 45)" />
  </svg>
);

export default LogoIcon;
