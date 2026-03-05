"use client";

import Link from "next/link";

/*
Navbar component

This creates the top navigation bar that stays at the top
of the website. Each link scrolls to a section of the page.
*/

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo / Site Name */}
        <h1 className="text-xl font-bold text-gray-800">
          Paws & Purrs
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#booking" className="hover:text-blue-600">Book</a>
          <a href="#reviews" className="hover:text-blue-600">Reviews</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#charities" className="hover:text-blue-600">Charities</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

      </div>
    </nav>
  );
}