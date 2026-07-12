import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-brand">
            {/* Apple Icon using standard SVG */}
            <svg 
              className="brand-logo"
              viewBox="0 0 170 170" 
              width="24" 
              height="24" 
              fill="currentColor"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.04-1.92-14.12-6.13-3.46-2.91-7.39-7.61-11.78-14.1-7.16-10.59-12.79-22.38-16.9-35.37-4.12-12.99-6.2-25.04-6.2-36.16 0-15.03 3.96-27.46 11.88-37.3 7.91-9.84 17.65-14.87 29.22-15.09 5.02 0 10.57 1.49 16.63 4.47 6.06 2.98 10.3 4.47 12.73 4.47 1.9 0 6.09-1.45 12.56-4.36 6.47-2.91 12.33-4.26 17.58-4.04 17.08.78 30.12 7.26 39.12 19.43-14.07 8.59-20.94 20.32-20.61 35.19.34 11.5 4.69 21.05 13.06 28.65 8.37 7.6 18.2 11.73 29.5 12.39-2.35 6.7-5.37 13.27-9.04 19.72zM119.22 30.24c0-7.7.9-14.73 2.7-21.1C115.15 9.7 109.43 12 104.75 16c-4.69 4.02-8.3 9.07-10.83 15.13-2.3 5.36-3.48 11.72-3.53 19.09 1.12.06 2.18.09 3.18.09 6.2 0 12.23-1.68 18.09-5.03 5.86-3.35 9.8-7.9 11.81-13.65 1.83-2.61 2.98-6.4 3.45-11.39z"/>
            </svg>
            <span className="brand-name">iPhone 14 Series</span>
          </div>
          
          <h1 className="hero-title">
            Up to 10%<br />off Voucher
          </h1>
          
          <a href="#shop" className="hero-link">
            <span>Shop Now</span>
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Right Side: Product Image Container */}
        <div className="hero-image-box">
          <img 
            src="/phone.webp" 
            alt="iPhone 14 Pro" 
            className="hero-image"
          />
        </div>

        {/* Slider Pagination Dots */}
        <div className="hero-pagination">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

