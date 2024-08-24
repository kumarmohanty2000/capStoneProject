// Home.js
import Header from "./Header";
import React from "react";
import AboutTheCompany from "./AboutTheCompany";
import ProductGallery from "./ProductGallery";
import ContactUs from "./ContactUs";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

function Home() {
  const location = useLocation();

  React.useEffect(() => {
    // Scroll to the section based on the URL hash
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header
        brand="My Own"
        section2="About"
        section3="Products"
        section4="Blog"
        section5="Contact"
      />
      <Container className="pt-5 mt-5">
      <section id="about" >
        <AboutTheCompany />
      </section>
      </Container>
      <Container style={{marginTop:"4rem"}} >
        <section id="products">
          <ProductGallery />
        </section>
      </Container>
      <section id="contact">
      <ContactUs/>
      </section>
      <Footer/>
    </>
  );
}

export default Home;
