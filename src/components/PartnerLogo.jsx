import React from "react";

const brands = [
  { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", url: "https://www.google.com" },
  { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", url: "https://www.microsoft.com" },
  { name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", url: "https://www.apple.com" },
  { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", url: "https://www.amazon.com" },
  { name: "Facebook", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png", url: "https://www.facebook.com" },
  { name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", url: "https://www.netflix.com" },
  { name: "Tesla", img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", url: "https://www.tesla.com" },
];

const PartnerLogo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Loved by Customers & Top Brands
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Connecting people through seamless video calls, chat, and collaboration.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {brands.map((brand, index) => (
            <a 
              key={index} 
              href={brand.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-32 h-20 p-3 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img src={brand.img} alt={brand.name} className="max-h-12 object-contain" />
            </a>
          ))}
        </div>

        <p className="mt-12 text-gray-600 text-lg">
          Join thousands of satisfied customers and leading brands using our platform every day.
        </p>
      </div>
    </section>
  );
};

export default PartnerLogo;
