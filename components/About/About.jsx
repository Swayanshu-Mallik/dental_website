"use client"; 
import React from 'react';
import BgImage from "@/assets/BgImage.jpg";
import BannerCard from '@/components/About/Bannercard';
import { SlStar } from 'react-icons/sl';

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '520px',
  width: '100vw',
};

const About = () => {
  return (
    <div style={bgStyle}>
      <div className="text-white bg-black/80 min-h-[530px] flex items-center py-10">
      <div className="container ">
        {/* header title section */}
        <div className="spce-y-3 uppercase text-center py-14">
          <p className='text-primary text-2xl font-semibold '>We provide the Best</p>
          <h1>Than Your Wish</h1>
        </div>

        {/* Card section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-8">            
          <BannerCard
  title={"Smooth Servies"}
  description={"Our goal is to provide smooth services that enhance your overall experience."}
  icons={<SlStar />}
/>
<BannerCard
  title={"Patient-Centered Care"}
  description={"Ensuring seamless and coordinated care across different providers and settings."}
  icons={<SlStar />}
/>

          </div>
          <div className="space-y-8">
          <BannerCard
  title={"Informed Consent"}
  description={"The patient's right to withdraw from the procedure or study at any time without penalty."}
  icons={<SlStar />}
/>
<BannerCard
  title={"Ethical Practice"}
  description={"Ethical healthcare practices prioritize patient well-being, informed consent, and confidentiality."}
  icons={<SlStar />}
/>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;