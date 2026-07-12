
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section">
    <Sidebar/>
     <Hero/>
    </section>
  );
};

export default Home;