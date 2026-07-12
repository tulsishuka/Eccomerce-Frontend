import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section-container">
      <div className="footer-content-grid">
                <div className="footer-col">
          <h2 className="footer-brand-title">Eco-Mart</h2>
          <h3 className="footer-section-title">Subscribe</h3>
          <p className="footer-text-muted">Get 10% off your first order</p>
          <div className="footer-email-input-wrapper">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="footer-email-input" 
            />
            <button className="footer-email-submit" aria-label="Subscribe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="footer-section-title">Support</h3>
          <p className="footer-address-text">
            111 Bijoy sarani, Dhaka,<br />
            DH 1515, Bangladesh.
          </p>
          <p className="footer-contact-item">
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          </p>
          <p className="footer-contact-item">
            <a href="tel:+88015888889999">+88015-88888-9999</a>
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-section-title">Account</h3>
          <ul className="footer-links-list">
            <li><a href="#account">My Account</a></li>
            <li><a href="#login">Login / Register</a></li>
            <li><a href="#cart">Cart</a></li>
            <li><a href="#wishlist">Wishlist</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-section-title">Quick Link</h3>
          <ul className="footer-links-list">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms Of Use</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-section-title">Download App</h3>
          <p className="footer-app-tagline">Save $3 with App New User Only</p>
          
          <div className="footer-download-matrix">
            <div className="qr-code-box">
              <img src="/qr.webp" alt="QR Code" className="qr-code-img" />
            </div>
            <div className="app-store-badges-column">
              <a href="#google-play" className="store-badge-link">
                <img src="/g.webp" alt="Get it on Google Play" className="store-badge-img" />
              </a>
              <a href="#app-store" className="store-badge-link">
                <img src="/playstore.webp" alt="Download on the App Store" className="store-badge-img" />
              </a>
            </div>
          </div>

          <div className="footer-social-row">
            <a href="#facebook" aria-label="Facebook" className="social-icon-link">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter" className="social-icon-link">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram" className="social-icon-link">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="social-icon-link">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>

      <div className="footer-baseline-bar">
        <p className="footer-copyright-text">
          &copy; Copyright test 2026. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;