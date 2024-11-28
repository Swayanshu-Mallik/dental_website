"use client";
import React from 'react'
import examine from "@/assets/examine.png";
import filling from "@/assets/filling.png";
import cleaning from "@/assets/cleaning.png";
import Image from 'next/image';

const ServicesData = [
  {
      id: 1,
      img: examine,
      name: "Check-ups",
      description: "Examine your teeth and gums for any issues.",
      aosDelay: "100"
  },
  {
      id: 2,
      img: filling,
      name: "Filling",
      description: "Prevent cavities and gum disease.",
      aosDelay: "100"
  },
  {
    id: 3,
    img: cleaning,
    name: "Cosmetic",
    description: "Clean your teeth to remove plaque and tartar.",
    aosDelay: "100"
}
];

const Services = () => {
  return (
    <div className="py-10 bg-black dark:bg-dark text-black dark:text-white">
    <div className="container">

      {/* header title section */}
      <div data-aos="fade-up" className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">choose your Services</h1>
      </div>

     {/* Best Service Card section */}
<div data-aos="fade-up"className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
  {ServicesData.map(({ id, img, name, description, aosDelay }) => {
    return (
      <d iv key={id} data-aos="fade-up" data-aos-delay={aosDelay}className="group rounded-2xl bg-white dark:bg-black hover:!bg-primary shadow-xl duration-200 max-w-[300px] relative">
        {/* image section */}
        <div className="h-[110px]">
          <Image src={img} alt="" className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover-110 group-hover:translate-x-4 duration-300"/>
        </div>
        {/* text content section */}
        <div className="p-4 text-center space-y-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2">{description}</p>
        <p className="text-primary text-2xl font-bold group-hover:text-black">10$</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg">Read More</button>
      </div>
      </d>
    );
  })}
</div>
    </div>
  </div>
  );
};

export default Services
