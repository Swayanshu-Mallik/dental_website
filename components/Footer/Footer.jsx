import React from 'react';
import { FaAndroid, FaAppStoreIos, FaFacebook, FaGoogle, FaInstagram, FaMapMarker, FaMousePointer, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      {/* upper section Banner */}
      <div className="bg-primary">
        <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
          <p>WE ARE READY FOR YOUR HEALTH SERVICE</p>
          <h1 className="text-3xl md:text-5xl font-bold">+91 9146521320</h1>
        </div>
      </div>

      {/* Bottom Footer section */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-40 py-12">

        {/* first col section */}
        <div className="space-y-6 gap-4">
          {/* Heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary gap-4">About dental zen</h1>
          <p>Regular check-ups and cleanings help maintain oral health by removing plaque and tartar buildup!</p>
          {/* social links */}
          <div className="flex items-center text-primary gap-5 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>

        {/* second cols section */}
        <div>
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">Download</h1>
          <p>Enables patients to access their medical records, appointment history, and billing information securely online</p>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            Android user
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            IOS user
            <span>
              <FaAppStoreIos className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
        </div>

        {/* third col section */}
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">Contacts</h1>
          <div className="flex items-center gap-4">
            <FaMapMarker /> 552 street, new work, USA
          </div>
          <div className="flex items-center gap-4">
            <MdCall /> +91 654654341432
          </div>
          <div className="flex items-center gap-4">
            <MdEmail /> denatalZen@example.com
          </div>
          <div className="flex items-center gap-4">
            <FaMousePointer /> www.dentalzen.com
          </div>
        </div>
      </div>

      <p className="text-center py-4 text-sm">
        Copyright © 2024. All rights reserved
      </p>
    </div>
  );
};

export default Footer;