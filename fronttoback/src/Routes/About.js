import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../Assets/night.jpg";
import Destination from "../Components/Destination";

import Footer from "../Components/Footer";
function About() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroimg={AboutImg}
      text="About"
      
      btnclass="show"
      />
      <Destination/>
      
       
      <Footer/>
      
    </>
  );
}

export default About;