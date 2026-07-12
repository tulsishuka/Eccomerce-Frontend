

// import './ProductCard.css';

// const PRODUCTS = [
//   { id: 1, name: "HAVIT HV-G92 Gamepad", discount: "-40%", image: "/game.webp", currentPrice: "$120", originalPrice: "$160", rating: 5, reviews: 88 },
//   { id: 2, name: "AK-900 Wired Keyboard", discount: "-35%", image: "/keyboard.webp", currentPrice: "$960", originalPrice: "$1160", rating: 4, reviews: 75 },
//   { id: 3, name: "IPS LCD Gaming Monitor", discount: "-30%", image: "/monitor.webp", currentPrice: "$370", originalPrice: "$400", rating: 5, reviews: 99 },
//   { id: 4, name: "S-Series Comfort Chair", discount: "-25%", image: "/chair.webp", currentPrice: "$375", originalPrice: "$400", rating: 4.5, reviews: 99 },
// //   { id: 5, name: "S-Series Comfort Chair", discount: "-25%", image: "/monitor.webp", currentPrice: "$375", originalPrice: "$400", rating: 4.5, reviews: 99 },
//   { id: 6, name: "S-Series Comfort Chair", discount: "-25%", image: "/game.webp", currentPrice: "$375", originalPrice: "$400", rating: 4.5, reviews: 99 }
// ];

// const ProductCard = ({ product }) => {
//   const renderStars = (rating) => {
//     const stars = [];
//     const floorRating = Math.floor(rating);
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= floorRating ? "#FFAD33" : "#E5E5E5"}>
//           <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//         </svg>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="product-card">
//       <div className="card-top-thumbnail">
//         <span className="discount-badge">{product.discount}</span>
//         <div className="action-icons-stack">
//           <button className="utility-badge-btn">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//             </svg>
//           </button>
//         </div>
//         <img src={product.image} alt={product.name} className="product-thumb-img" />
//         <button className="add-to-cart-btn">Add To Cart</button>
//       </div>
//       <div className="card-details-box">
//         <h3 className="product-title-name">{product.name}</h3>
//         <div className="price-tag-row">
//           <span className="current-price">{product.currentPrice}</span>
//           <span className="original-price">{product.originalPrice}</span>
//         </div>
//         <div className="ratings-review-row">
//           <div className="stars-wrapper">{renderStars(product.rating)}</div>
//           <span className="review-count">({product.reviews})</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductSection = ({ sliderRef }) => {
//   return (
//     <section className="products-grid-container">
//       {/* Container row updated to catch forwarded slider reference hook pointer */}
//       <div className="products-grid-layout slider-row-mode" ref={sliderRef}>
//         {PRODUCTS.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <div className="view-all-btn-wrapper">
//         <button className="view-all-products-btn">View All Products</button>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;



import { useEffect, useRef, useState } from 'react';
import './ProductCard.css';

const PRODUCTS = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", discount: "-40%", image: "/game.webp", currentPrice: "$120", originalPrice: "$160", rating: 5, reviews: 88 },
  { id: 2, name: "AK-900 Wired Keyboard", discount: "-35%", image: "/keyboard.webp", currentPrice: "$960", originalPrice: "$1160", rating: 4, reviews: 75 },
  { id: 3, name: "IPS LCD Gaming Monitor", discount: "-30%", image: "/monitor.webp", currentPrice: "$370", originalPrice: "$400", rating: 5, reviews: 99 },
  { id: 4, name: "S-Series Comfort Chair", discount: "-25%", image: "/chair.webp", currentPrice: "$375", originalPrice: "$400", rating: 4.5, reviews: 99 },
  { id: 5, name: "S-Series Comfort Chair", discount: "-25%", image: "/monitor.webp", currentPrice: "$375", originalPrice: "$400", rating: 4.5, reviews: 99 },
  { id: 6, name: "S-Series Comfort Chair", discount: "-25%", image: "/game.webp", currentPrice: "$375", originalPrice: "$400", rating: 4.5, reviews: 99 }
];

const ProductCard = ({ product, index, isVisible }) => {
  const renderStars = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= floorRating ? "#FFAD33" : "#E5E5E5"}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div 
      className={`product-card ${isVisible ? 'animate-in' : ''}`}
      style={{ '--card-index': index }} /* Passed to CSS to stagger delays */
    >
      <div className="card-top-thumbnail">
        <span className="discount-badge">{product.discount}</span>
        <div className="action-icons-stack">
          <button className="utility-badge-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <img src={product.image} alt={product.name} className="product-thumb-img" />
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>
      <div className="card-details-box">
        <h3 className="product-title-name">{product.name}</h3>
        <div className="price-tag-row">
          <span className="current-price">{product.currentPrice}</span>
          <span className="original-price">{product.originalPrice}</span>
        </div>
        <div className="ratings-review-row">
          <div className="stars-wrapper">{renderStars(product.rating)}</div>
          <span className="review-count">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ sliderRef }) => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const internalRef = useRef(null);

  // Combine the forwarded sliderRef and our local observer layout ref
  const containerRef = sliderRef || internalRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.unobserve(entry.target); // Stop observing once triggered
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' } // Triggers slightly before fully viewable
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <section className="products-grid-container">
      <div className="products-grid-layout slider-row-mode" ref={containerRef}>
        {PRODUCTS.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index} 
            isVisible={hasIntersected} 
          />
        ))}
      </div>
      <div className="view-all-btn-wrapper">
        <button className="view-all-products-btn">View All Products</button>
      </div>
    </section>
  );
};

export default ProductSection;