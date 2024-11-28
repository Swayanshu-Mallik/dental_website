import React from "react";
import dent from "@/assets/dent.png";
import hospitalbg from "@/assets/hospitalbg.jpg"; 
import Image from "next/image";

const bgStyle = {
  backgroundImage: `url(${hospitalbg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "520px",
  width: "100vw"
};

const Hero = () => {
  return (
    <div style={bgStyle}>
      <div className="dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex">
      <div className="container grid grid-cols-1 place-items-center">
        {/* text content section */}
        <div className="text-center space-y-5 py-14">
          <p 
          data-aos="fade-up"
          className="text-primary text-3xl font-semibold ">SMiLe Now</p>
          <p data-aos ="fade-up"
          data-aos-delay="1000"
          className="tracking-[8px] text-base sm:text-xl font-semibold">www.DentalZen.com</p>
        </div>
        {/* Image section */}
        <div data-aos="zoom-in-right"
        data-aos-duration="1000">
          <Image src={dent}
          alt="dent"
          className="max-h-[460px] sm:scale-125
          translate-y-10 sm:translate-y-0" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
