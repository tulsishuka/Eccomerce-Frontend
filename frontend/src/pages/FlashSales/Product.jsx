// import FlashSales from "../../components/FlashSales/FlashSales"
// import ProductSection from "../../components/FlashSales/ProductCard"

// const Product = () => {
//   return (
//   <>
//   <FlashSales/>
//   <ProductSection/>
//   </>
//   )
// }

// export default Product

import  { useRef } from 'react'
import FlashSales from "../../components/FlashSales/FlashSales"
import ProductSection from "../../components/FlashSales/ProductCard"

const Product = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      // Scrolls left by the width of roughly one or two items
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
      <FlashSales onPrev={scrollLeft} onNext={scrollRight} />
      <ProductSection sliderRef={sliderRef} />
    </>
  );
};

export default Product;