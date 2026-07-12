

import  { useRef } from 'react'
import FlashSales from "../../components/FlashSales/FlashSales"
import ProductSection from "../../components/FlashSales/ProductCard"

const Product = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
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