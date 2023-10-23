import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
// import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
// import Testimonial from "./components/tesimonial/Testimonial";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="w-full h-auto px-4 bg-bodyColor text-lightText">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
