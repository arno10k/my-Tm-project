import React, { useRef } from 'react';
import './VerticalScrollList.css';

function VerticalScrollList({ children }) {
  const scrollRef = useRef(null);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -150, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="vertical-scroll-wrapper">
      {/* Up Arrow Button */}
      <button className="account-arrow-btn scroll-up-btn" onClick={scrollUp}>
        <i className="fas fa-chevron-up"></i>
      </button>

      {/* Scrollable Container */}
      <div className="account-scroll-container" ref={scrollRef}>
        {children}
      </div>

      {/* Down Arrow Button */}
      <button className="account-arrow-btn scroll-down-btn" onClick={scrollDown}>
        <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  );
}

export default VerticalScrollList;