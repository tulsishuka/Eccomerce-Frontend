import "./App.css";
import Add from "./components/Add/Add";
import ExploreProduct from "./components/ExploreProduct/ExploreProduct";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"
import NewArrival from "./components/NewArrival/NewArrival";
import ProductArrival from "./components/ProductArrival/ProductArrival";
import Category from "./pages/BrowseCategory/Category";
import Product from "./pages/FlashSales/Product";
import Home from "./pages/Home/Home";

const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <Product/>
   <Category/>
   <NewArrival/>
   <Add/>
   <ExploreProduct/>
   <ProductArrival/>
   <Footer/>
   </>
  )
}

export default App