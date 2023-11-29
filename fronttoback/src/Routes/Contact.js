import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../Assets/8.jpg";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroimg={AboutImg}
      text="contact"
      
      btnclass="show"
      />

      <ContactForm/>
      <Footer/>
      
    </>
  );
}

export default Contact;