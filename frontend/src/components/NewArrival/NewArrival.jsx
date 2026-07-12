import { useRef } from 'react';
import './NewArrival.css';

const BEST_SELLERS = [
  {
    id: 1,
    name: "The north coat",
    image: "/coat.webp",
    currentPrice: "$260",
    originalPrice: "$360",
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/bag.webp",
    currentPrice: "$960",
    originalPrice: "$1160",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/desko.webp",
    currentPrice: "$160",
    originalPrice: "$170",
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    image: "/book.webp",
    currentPrice: "$360",
    originalPrice: "",
    rating: 5,
    reviews: 65,
  },
  {
    id: 5,
    name: "Gaming Headset Pro",
    image: "/headset.webp",
    currentPrice: "$200",
    originalPrice: "$250",
    rating: 4,
    reviews: 42,
  }
];

const NewArrival = () => {
  const scrollContainerRef = useRef(null);

  // Smooth cyclic scroll navigation for items when clicking the main tracking button
  const handleNextScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // If reached the end, snap back smoothly to start, else move forward
      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 290, behavior: 'smooth' });
      }
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill={i <= floorRating ? "#FFAD33" : "#E5E5E5"}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="best-selling-section">
      {/* Top Categorization Tag */}
      <div className="section-tag-row">
        <div className="red-accent-badge"></div>
        <span className="tag-label-text">This Month</span>
      </div>

      {/* Title Header Layout Bar */}
      <div className="section-header-main">
        <h2 className="section-title-text">Best Selling Products</h2>
        <button className="view-all-accent-btn" onClick={handleNextScroll}>
          View All
        </button>
      </div>

      {/* Horizontally Scrollable Product Slider Track */}
      <div className="products-slider-track" ref={scrollContainerRef}>
        {BEST_SELLERS.map((product) => (
          <div className="seller-product-card" key={product.id}>
            {/* Top Thumbnail Box */}
            <div className="product-media-wrapper">
              <div className="product-action-stack">
                <button className="circle-utility-btn" aria-label="Add to Wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="circle-utility-btn" aria-label="Quick View">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
              <img src={product.image} alt={product.name} className="seller-card-img" />
            </div>

            {/* Bottom Content Metadata */}
            <div className="seller-meta-box">
              <h3 className="seller-title-name">{product.name}</h3>
              <div className="seller-price-row">
                <span className="seller-current-price">{product.currentPrice}</span>
                {product.originalPrice && (
                  <span className="seller-old-price">{product.originalPrice}</span>
                )}
              </div>
              <div className="seller-stars-row">
                <div className="stars-flex-box">{renderStars(product.rating)}</div>
                <span className="seller-review-count">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;