import { useEffect, useRef, useState } from 'react';
import './ExploreProduct.css';

const PRODUCTS = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    image: "book (2).webp",
    price: "$100",
    rating: 3,
    reviews: 35,
    isNew: false
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image: "/car.webp",
    price: "$360",
    rating: 4,
    reviews: 95,
    isNew: false
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image: "/camera.webp",
    price: "$700",
    rating: 5,
    reviews: 325,
    isNew: false
  },
  {
    id: 4,
    name: "Curology Product Set",
    image: "/shoes.webp",
    price: "$500",
    rating: 4,
    reviews: 145,
    isNew: false
  },
  {
    id: 5,
    name: "Kids Electric Car",
    image: "/laptop.webp",
    price: "$960",
    rating: 5,
    reviews: 66,
    isNew: true,
    colors: ["#DB4444", "#EE1111"]
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    image: "/play.webp",
    price: "$1160",
    rating: 5,
    reviews: 35,
    isNew: true,
    colors: ["#EEEE22", "#DB4444"]
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    image: "/skincare.webp",
    price: "$660",
    rating: 4.5,
    reviews: 55,
    isNew: true,
    colors: ["#111111", "#DB4444"]
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    image: "/jacket.webp",
    price: "$660",
    rating: 4.5,
    reviews: 55,
    isNew: false,
    colors: ["#2D4F41", "#DB4444"]
  }
];

const ExploreProduct = () => {
  const gridContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    if (gridContainerRef.current) {
      observer.observe(gridContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = (direction) => {
    if (gridContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      gridContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          width="14" 
          height="14" 
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
    <section className="explore-products-section">
      <div className="explore-tag-row">
        <div className="red-vertical-badge"></div>
        <span className="tag-label-text">Our Products</span>
      </div>
      <div className="explore-header-main">
        <h2 className="explore-title-text">Explore Our Products</h2>
        <div className="explore-nav-arrows">
          <button className="arrow-nav-btn" onClick={() => handleScroll('left')} aria-label="Previous Products">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className="arrow-nav-btn" onClick={() => handleScroll('right')} aria-label="Next Products">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="explore-grid-track" ref={gridContainerRef}>
        {PRODUCTS.map((product, index) => (
          <div 
            className={`explore-product-card ${isVisible ? 'animate-in' : ''}`} 
            key={product.id}
            style={{ '--card-index': index }}
          >
            <div className="explore-media-box">
              {product.isNew && <span className="badge-new-pill">NEW</span>}
              
              <div className="explore-action-stack">
                <button className="explore-utility-circle" aria-label="Add to Wishlist">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="explore-utility-circle" aria-label="Quick View">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>

              <img src={product.image} alt={product.name} className="explore-card-img" />
              
              <button className="explore-add-to-cart-btn">Add To Cart</button>
            </div>

            <div className="explore-meta-box">
              <h3 className="explore-product-name">{product.name}</h3>
              
              <div className="explore-stats-row">
                <span className="explore-price-tag">{product.price}</span>
                <div className="explore-stars-box">{renderStars(product.rating)}</div>
                <span className="explore-reviews-count">({product.reviews})</span>
              </div>

              {product.colors && (
                <div className="explore-color-variants">
                  {product.colors.map((color, idx) => (
                    <span 
                      key={idx} 
                      className={`color-dot-node ${idx === 0 ? 'active' : ''}`} 
                      style={{ '--variant-color': color }}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      <div className="explore-footer-action">
        <button className="explore-view-all-btn">View All Products</button>
      </div>
    </section>
  );
};

export default ExploreProduct;