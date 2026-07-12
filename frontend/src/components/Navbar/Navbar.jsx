import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <a href="#shop" className="shop-now-btn">ShopNow</a>
          </span>
        </div>
        <div className="language-selector">
          <span>English</span>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        {/* Brand Logo */}
        <div className="nav-logo">
          <a href="/">Eco-Mart</a>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>

        {/* Actions (Search & Icons) */}
        <div className="nav-actions">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="search-input"
            />
            <svg 
              className="search-icon"
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className="icon-group">
            {/* Wishlist Icon */}
            <button className="icon-btn" aria-label="Wishlist">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="icon-btn" aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;