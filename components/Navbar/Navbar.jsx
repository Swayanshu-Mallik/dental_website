"use client";
import Link from 'next/link';
import React from 'react';
import DarkMode from "@/components/Navbar/DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "@/components/Navbar/ResponsiveMenu";
import { usePathname } from 'next/navigation';

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 4,
    name: "RESULTS",
    link: "/#results",
  },
  {
    id: 5,
    name: "CONTACTS",
    link: "/#contacts",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <Link href="/" className="text-3xl font-bold">
            <span>Dental</span>
            <span className="text-primary">Zen</span>
          </Link>

          {/* section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map(({ id, name, link }) => {
                const isActive = pathname === link;
                return (
                  <li key={id} className="py-4">
                    <Link legacyBehavior href={link}>
                      <a
                        className={`text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300 ${
                          isActive ? "bg-primary text-white" : "text-black dark:text-white hover:bg-primary"
                        }`}
                      >
                        {name}
                      </a>
                    </Link>
                  </li>
                );
              })}

              {/* DarkMode feature implement */}
              <DarkMode />
            </ul>
          </div>

          {/* Mobile Menu Section */}
          <div className="md:hidden flex items-center gap-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
