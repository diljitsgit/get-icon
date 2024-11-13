// import { useState } from "react";
//<img src="https://icon.horse/icon/example.com" alt="example.com icon"></img> //API call to get icon
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";
import MainHome from "./main-home-section.tsx";
import HowToSection from "./how-to-section.tsx";

function HomePage() {
  return (
    <>
      <div className="main">
        <Navbar />
        <MainHome />
        <HowToSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
