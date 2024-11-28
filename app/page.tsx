"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";


const Page = () => {
  


  useEffect(() =>{
    
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  
  return (
    <div className="dark:bg-black dark:text-white">
      <Hero />
      <Contact />
      <Services />
      <About />
      
    </div>
  );
};

export default Page;
