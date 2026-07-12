
import { useEffect, useRef, useState } from 'react';
import './ProductArrival.css';

const ProductArrival = () => {
  const layoutRef = useRef(null);
  const footerRef = useRef(null);
  const [layoutVisible, setLayoutVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const layoutObserver = new IntersectionObserver(
      ([entry]) => setLayoutVisible(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    if (layoutRef.current) layoutObserver.observe(layoutRef.current);
    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      layoutObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <section className="arrival-section-container">
      <div className="arrival-tag-row">
        <span className="red-vertical-pill"></span>
        <span className="tag-label-text">Featured</span>
      </div>
      <h2 className="arrival-main-heading">New Arrival</h2>
      <div className="bento-grid-layout" ref={layoutRef}>
                <div className={`bento-tile tile-large-ps5 ${layoutVisible ? 'animate-in' : ''}`} style={{ '--item-index': 0 }}>
          <img src="/playstation.webp" alt="PlayStation 5 Console" className="tile-bg-image img-ps5" />
          <div className="tile-content-overlay">
            <h3 className="tile-title">PlayStation 5</h3>
            <p className="tile-description">Black and White version of the PS5 coming out on sale.</p>
            <a href="#shop" className="tile-shop-link">Shop Now</a>
          </div>
        </div>
        <div className="bento-column-group">
                    <div className={`bento-tile tile-wide-women ${layoutVisible ? 'animate-in' : ''}`} style={{ '--item-index': 1 }}>
            <img src="/women.webp" alt="Women's Collection" className="tile-bg-image img-women" />
            <div className="tile-content-overlay">
              <h3 className="tile-title">Women's Collections</h3>
              <p className="tile-description">Featured woman collections that give you another vibe.</p>
              <a href="#shop" className="tile-shop-link">Shop Now</a>
            </div>
          </div>
          <div className="bento-split-row">
                        <div className={`bento-tile tile-square-item ${layoutVisible ? 'animate-in' : ''}`} style={{ '--item-index': 2 }}>
              <div className="tile-radial-glow"></div>
              <img src="/speaker.webp" alt="Amazon Wireless Speakers" className="tile-bg-image img-speaker" />
              <div className="tile-content-overlay">
                <h3 className="tile-title">Speakers</h3>
                <p className="tile-description">Amazon wireless speakers</p>
                <a href="#shop" className="tile-shop-link">Shop Now</a>
              </div>
            </div>
            <div className={`bento-tile tile-square-item ${layoutVisible ? 'animate-in' : ''}`} style={{ '--item-index': 3 }}>
              <div className="tile-radial-glow"></div>
              <img src="/perfume.webp" alt="GUCCI INTENSE OUD EDP" className="tile-bg-image img-perfume" />
              <div className="tile-content-overlay">
                <h3 className="tile-title">Perfume</h3>
                <p className="tile-description">GUCCI INTENSE OUD EDP</p>
                <a href="#shop" className="tile-shop-link">Shop Now</a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="features-footer-row" ref={footerRef}>
                <div className={`feature-card-block ${footerVisible ? 'animate-in' : ''}`} style={{ '--item-index': 0 }}>
          <div className="icon-outer-ring">
            <div className="icon-inner-core">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
          </div>
          <h4 className="feature-block-title">FREE AND FAST DELIVERY</h4>
          <p className="feature-block-text">Free delivery for all orders over $140</p>
        </div>

        <div className={`feature-card-block ${footerVisible ? 'animate-in' : ''}`} style={{ '--item-index': 1 }}>
          <div className="icon-outer-ring">
            <div className="icon-inner-core">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
          </div>
          <h4 className="feature-block-title">24/7 CUSTOMER SERVICE</h4>
          <p className="feature-block-text">Friendly 24/7 customer support</p>
        </div>

        <div className={`feature-card-block ${footerVisible ? 'animate-in' : ''}`} style={{ '--item-index': 2 }}>
          <div className="icon-outer-ring">
            <div className="icon-inner-core">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
          </div>
          <h4 className="feature-block-title">MONEY BACK GUARANTEE</h4>
          <p className="feature-block-text">We return money within 30 days</p>
        </div>

      </div>
    </section>
  );
};

export default ProductArrival;