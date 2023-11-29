import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/1.jpg";

import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero"
      heroimg={HeroImg}
      
        text="your journey"
      
      buttontext="travell plan"
      url="/home"
      btnclass="show"
      />
     
      <Footer/>
      
    </>
  );
}

export default Home;