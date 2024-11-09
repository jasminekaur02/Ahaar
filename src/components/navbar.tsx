"use client"; 
import { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-white">
      <header className="bg-[#FFFFFF] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="/" title="Logo" className="flex">
                <img className="w-auto h-10" src="/logo.png" alt="Logo" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                className={`w-6 h-6 ${menuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link href="/" title="Home" className="text-base text-black transition-all duration-200 hover:text-opacity-80 hover:underline">
                Home
              </Link>

              <Link href="/about" title="About" className="text-base text-black transition-all duration-200 hover:text-opacity-80 hover:underline">
                About
              </Link>

              <Link href="/dashboard/receiptify" title="Receiptify" className="text-base text-black transition-all duration-200 hover:text-opacity-80 hover:underline">
                Receiptify
              </Link>

              <Link href="/" title="Ahaar-Zone" className="text-base text-black transition-all duration-200 hover:text-opacity-80 hover:underline">
                Ahaar-Zone
              </Link>
            </div>

            {/* Login Button */}
            <Link
              href="/login"
              title="Login"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-green-300 hover:text-black focus:text-black focus:bg-green-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Links (Toggleable) */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-white shadow-md`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="/" title="Home" className="text-base text-black transition-all duration-200 hover:text-opacity-80 hover:underline">
            Home
          </Link>
          <Link href="/about" title="About" className="text-base text-black transition-all duration-200 hover:text-opacity-80 hover:underline">
            About
          </Link>
          <Link href="/dashboardd" title="Receiptify" className="text-base text-black transition-all duration -200 hover:text-opacity-80 hover:underline">
            Receiptify
          </Link>
          <Link href="/dashboard" title="Ahaar-Zone" className="text-base text-black transition-all duration-200 hover:text-opacity-80 hover:underline">
            Ahaar-Zone
          </Link>
          <Link
            href="/login"
            title="Login"
            className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-green-300 hover:text-black focus:text-black focus:bg-green-300 font-semibold text-white bg-black rounded-full"
            role="button"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;