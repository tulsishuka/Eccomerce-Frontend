import { useState, useEffect, useRef } from 'react';

import './Add.css';

const Add = () => {

  const headingRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35

  });



  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        setIsVisible(entry.isIntersecting)
      },

      {

        threshold: 0.05,

        rootMargin: '0px 0px -40px 0px'

      }

    );



    if (headingRef.current) {

      observer.observe(headingRef.current);

    }



    return () => observer.disconnect();

  }, []);



  useEffect(() => {

    const interval = setInterval(() => {

      setTimeLeft((prev) => {

        let { days, hours, minutes, seconds } = prev;



        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {

          clearInterval(interval);

          return prev;

        }



        if (seconds > 0) {

          seconds--;

        } else {

          seconds = 59;

          if (minutes > 0) {

            minutes--;

          } else {

            minutes = 59;

            if (hours > 0) {

              hours--;

            } else {

              hours = 23;

              if (days > 0) days--;

            }

          }

        }

        return { days, hours, minutes, seconds };

      });

    }, 1000);



    return () => clearInterval(interval);

  }, []);



  const formatNumber = (num) => String(num).padStart(2, '0');



  return (

    <section className="promo-banner-container">

      <div className="promo-banner-content">
        <div className="promo-text-column">

          <span className="promo-tagline">Categories</span>

          <h2

            ref={headingRef}

            className={`promo-main-heading ${isVisible ? 'animate-in' : ''}`}

          >

            Enhance Your <br />Music Experience

          </h2>

          <div className="promo-countdown-row">

            <div className="circle-time-block">

              <span className="circle-digit">{formatNumber(timeLeft.hours)}</span>

              <span className="circle-label">Hours</span>

            </div>

            <div className="circle-time-block">

              <span className="circle-digit">{formatNumber(timeLeft.days)}</span>

              <span className="circle-label">Days</span>

            </div>

            <div className="circle-time-block">

              <span className="circle-digit">{formatNumber(timeLeft.minutes)}</span>

              <span className="circle-label">Minutes</span>

            </div>

            <div className="circle-time-block">

              <span className="circle-digit">{formatNumber(timeLeft.seconds)}</span>

              <span className="circle-label">Seconds</span>

            </div>

          </div>



          <button className="promo-cta-btn">Buy Now!</button>

        </div>



        <div className="promo-image-column">

          <div className="radial-glow-backdrop"></div>

          <img src="/sound.webp" alt="JBL Boombox Speaker" className="advertisement-image" />

        </div>



      </div>

    </section>

  );

};



export default Add; 