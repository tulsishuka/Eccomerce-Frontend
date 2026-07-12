

import  { useState, useEffect } from 'react';
import './FlashSales.css';

const FlashSales = ({ onPrev, onNext }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else { hours = 23; if (days > 0) days--; }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="flash-sales-section">
      <div className="section-tag-container">
        <div className="red-badge"></div>
        <span className="section-tag-text">Today's</span>
      </div>

      <div className="flash-sales-header-row">
        <div className="left-side-header">
          <h2 className="flash-sales-title">Flash Sales</h2>
          <div className="countdown-container">
            <div className="time-block"><span className="time-label">Days</span><span className="time-digit">{formatNumber(timeLeft.days)}</span></div>
            <span className="time-separator">:</span>
            <div className="time-block"><span className="time-label">Hours</span><span className="time-digit">{formatNumber(timeLeft.hours)}</span></div>
            <span className="time-separator">:</span>
            <div className="time-block"><span className="time-label">Minutes</span><span className="time-digit">{formatNumber(timeLeft.minutes)}</span></div>
            <span className="time-separator">:</span>
            <div className="time-block"><span className="time-label">Seconds</span><span className="time-digit">{formatNumber(timeLeft.seconds)}</span></div>
          </div>
        </div>

        <div className="carousel-nav-buttons">
          <button className="nav-arrow-btn" onClick={onPrev} aria-label="Previous slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className="nav-arrow-btn" onClick={onNext} aria-label="Next slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;