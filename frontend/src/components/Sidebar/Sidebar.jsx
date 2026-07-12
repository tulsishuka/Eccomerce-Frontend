import './Sidebar.css';

const Sidebar = () => {
  const categories = [
    { name: "Woman's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: "Electronics", hasSubmenu: false },
    { name: "Home & Lifestyle", hasSubmenu: false },
    { name: "Medicine", hasSubmenu: false },
    { name: "Sports & Outdoor", hasSubmenu: false },
    { name: "Baby's & Toys", hasSubmenu: false },
    { name: "Groceries & Pets", hasSubmenu: false },
    { name: "Health & Beauty", hasSubmenu: false },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-item">
            <a href={`#${category.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
              <span>{category.name}</span>
              {category.hasSubmenu && (
                <svg 
                  className="chevron-icon"
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;