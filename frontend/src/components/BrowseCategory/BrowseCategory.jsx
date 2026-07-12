
import { useEffect, useRef, useState } from 'react';
import './BrowseCategory.css';

const CATEGORIES = [
  {
    id: 'phones',
    name: 'Phones',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: 'computers',
    name: 'Computers',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: 'smartwatch',
    name: 'SmartWatch',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="3"></rect>
        <path d="M9 6V2h6v4M9 18v4h6v-4"></path>
        <path d="M12 10v2h2"></path>
      </svg>
    ),
  },
  {
    id: 'camera',
    name: 'Camera',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 'headphones',
    name: 'HeadPhones',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    ),
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="3"></rect>
        <line x1="6" y1="12" x2="10" y2="12"></line>
        <line x1="8" y1="10" x2="8" y2="14"></line>
        <line x1="15" y1="11" x2="15.01" y2="11"></line>
        <line x1="18" y1="13" x2="18.01" y2="13"></line>
      </svg>
    ),
  }
];

const BrowseCategory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="browse-category-section" ref={sectionRef}>
      <div className="category-tag-container">
        <div className="red-badge-mark"></div>
        <span className="category-tag-text">Categories</span>
      </div>

      <div className="category-header-row">
        <h2 className="category-main-title">Browse By Category</h2>
        <div className="category-nav-arrows">
          <button className="category-arrow-btn" aria-label="Previous Categories">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className="category-arrow-btn" aria-label="Next Categories">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="categories-grid-layout">
        {CATEGORIES.map((item, index) => (
          <div 
            key={item.id} 
            className={`category-card-item ${isVisible ? 'animate-in' : ''}`}
            style={{ '--card-index': index }}
          >
            <div className="category-icon-box">{item.icon}</div>
            <span className="category-item-label">{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="category-bottom-divider" />
    </section>
  );
};

export default BrowseCategory;