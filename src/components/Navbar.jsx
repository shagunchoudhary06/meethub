import React, { useState } from 'react';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center text-2xl font-bold text-blue-600">
              MEETHUB
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {["Features","Solutions","Resources","Pricing"].map((item, i) => (
              <a 
                key={i}
                href="#" 
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="lg:hidden px-3 py-2 text-black bg-gray-200 rounded-md"
          >
            {expanded ? 'Close' : 'Menu'}
          </button>

          {/* Get Started Button */}
          <a
            href="#"
            className="hidden lg:inline-flex px-4 py-3 ml-10 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Get started
          </a>
        </nav>

        {/* Mobile Menu */}
        {expanded && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flex flex-col px-6 space-y-2">
              {["Features","Solutions","Resources","Pricing"].map((item, i) => (
                <a 
                  key={i} 
                  href="#"
                  className="py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {item}
                </a>
              ))}

              <a
                href="#"
                className="mt-4 px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition text-center"
              >
                Get started
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
