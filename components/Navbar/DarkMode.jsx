"use client";
import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState("light"); // Default theme is "light"

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    try {
      const element = document.documentElement;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("theme", theme);
      }
      if (theme === "dark") {
        element.classList.add("dark");
        element.classList.remove("light");
      } else {
        element.classList.add("light");
        element.classList.remove("dark");
      }
    } catch (error) {
      console.error("Error updating theme:", error);
      // Consider resetting the theme to a default value or handling the error differently
    }
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <BiSolidMoon
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer"
        />
      )}
    </>
  );
};

export default DarkMode;
