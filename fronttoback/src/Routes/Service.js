import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../Assets/2.jpg";

import Footer from "../Components/Footer";
function Service() {
  return (
    <>
      <Navbar/>-
      <Hero
      cName="hero-mid"
      heroimg={AboutImg}
      text="Service"
     
      
      
      btnclass="show"
      />
      
      
      <Footer/>
      
    </>
  );
}

export default Service;