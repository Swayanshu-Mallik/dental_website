import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Navlinks }from "./Navbar";
import Link from "next/link";


const ResponsiveMenu = ({ showMenu }) => {
  

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-black dark:text-white px-8 pb-6 pt-16 text-white duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        {/* user top section */}
        <div className="flex items-center justify-start text-bl gap-3">
          <FaUserCircle className="text-5xl" />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Plus Member</h1>
          </div>
        </div>

        {/* Navigation links section */}
        <nav className="mt-12">
          {Navlinks.map(({ id, name, link }) => {
            return (
              <li key={id} className="py-4">
                <Link
                href={link}
                className="text-xl font-medium
                text-black dark:text-white duration-300">
                  {name}
                </Link>
              </li>
            )
          })}
        </nav>
      </div>

      {/* bottom footer section */}
      <div className="footer text-black dark:text-white">
        <h1>
          Made by SATIR
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;