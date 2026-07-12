import './ProductArrival.css';

const ProductArrival = () => {
  return (
    <section className="arrival-section-container">
      {/* Top Section Tag Identifier */}
      <div className="arrival-tag-row">
        <span className="red-vertical-pill"></span>
        <span className="tag-label-text">Featured</span>
      </div>
      <h2 className="arrival-main-heading">New Arrival</h2>

      {/* Complex Bento Grid Block Component */}
      <div className="bento-grid-layout">
        
        {/* Left Core Highlight Tile: PlayStation 5 */}
        <div className="bento-tile tile-large-ps5">
          <img src="/playstation.webp" alt="PlayStation 5 Console" className="tile-bg-image img-ps5" />
          <div className="tile-content-overlay">
            <h3 className="tile-title">PlayStation 5</h3>
            <p className="tile-description">Black and White version of the PS5 coming out on sale.</p>
            <a href="#shop" className="tile-shop-link">Shop Now</a>
          </div>
        </div>

        {/* Right Dynamic Layout Column Group */}
        <div className="bento-column-group">
          
          {/* Top Wide Banner: Women's Collections */}
          <div className="bento-tile tile-wide-women">
            <img src="/women.webp" alt="Women's Collection" className="tile-bg-image img-women" />
            <div className="tile-content-overlay">
              <h3 className="tile-title">Women's Collections</h3>
              <p className="tile-description">Featured woman collections that give you another vibe.</p>
              <a href="#shop" className="tile-shop-link">Shop Now</a>
            </div>
          </div>

          {/* Bottom Split Row Elements */}
          <div className="bento-split-row">
            
            {/* Left Box: Speakers */}
            <div className="bento-tile tile-square-item">
              <div className="tile-radial-glow"></div>
              <img src="/speaker.webp" alt="Amazon Wireless Speakers" className="tile-bg-image img-speaker" />
              <div className="tile-content-overlay">
                <h3 className="tile-title">Speakers</h3>
                <p className="tile-description">Amazon wireless speakers</p>
                <a href="#shop" className="tile-shop-link">Shop Now</a>
              </div>
            </div>

            {/* Right Box: Perfume */}
            <div className="bento-tile tile-square-item">
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

      {/* Bottom Features Accent Row Panels */}
      <div className="features-footer-row">
        
        {/* Feature Node 1 */}
        <div className="feature-card-block">
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

        {/* Feature Node 2 */}
        <div className="feature-card-block">
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

        {/* Feature Node 3 */}
        <div className="feature-card-block">
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