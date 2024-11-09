// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">Ahaar</h3>
            <p className="text-sm">Tackling food waste, one meal at a time.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <li>
                <a href="/about" className="text-green-400 hover:underline">About Us</a>
              </li>
              <li>
                <a href="/faq" className="text-green-400 hover:underline">FAQ</a>
              </li>
              <li>
                <a href="/contact" className="text-green-400 hover:underline">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="text-green-400 hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ahaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;