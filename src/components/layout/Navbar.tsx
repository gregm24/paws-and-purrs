"use client";

/*
Navbar

Sticky navigation bar for the website.
*/

export default function Navbar() {

  return (

    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-xl font-bold text-slate-900">
          Paws & Purrs
        </h1>

        {/* Links */}

        <div className="space-x-6 text-slate-700 font-medium hidden md:block">

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#services" className="hover:text-blue-600">
            Services
          </a>

          <a href="#booking" className="hover:text-blue-600">
            Book
          </a>

          <a href="#reviews" className="hover:text-blue-600">
            Reviews
          </a>

          <a href="#gallery" className="hover:text-blue-600">
            Gallery
          </a>

          <a href="#charities" className="hover:text-blue-600">
            Charities
          </a>

        </div>

      </div>

    </nav>
  );
}