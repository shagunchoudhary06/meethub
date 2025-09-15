import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        
        {/* Discover */}
        <div>
          <h3 className="font-semibold text-xl mb-5">Discover</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Assistance */}
        <div>
          <h3 className="font-semibold text-xl mb-5">Assistance</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-xl mb-5">Explore</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li><a href="#">Blog Articles</a></li>
            <li><a href="#">Guides & Tutorials</a></li>
            <li><a href="#">Partner with Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-xl mb-5">Connect</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li><a href="#">Community Forum</a></li>
            <li><a href="#">Events & Webinars</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1 col-span-2">
          <h3 className="font-semibold text-xl mb-5">
            Get exclusive offers and updates directly to your inbox
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-md text-black flex-1 text-sm md:text-base"
            />
            <button className="bg-white text-black px-5 py-3 rounded-md font-medium text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm md:text-base mt-12 border-t border-gray-500 pt-6">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}
