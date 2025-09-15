import React from 'react';
import HeroImg from "../assets/VideoChat.png";

const Hero = () => {
  const [input, setInput] = React.useState("");

  const submitHandler = () => {
    if (input) window.location.href = `/room/${input}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center pt-24">
      <section className="w-full">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-x-16">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
                Meet with your Family or Friends
              </h1>
              <p className="mt-4 text-lg text-gray-600 sm:mt-8 font-inter">
                Start a free conference call with your friends, family or team members. No sign up required.
              </p>

              <div className="mt-8 sm:mt-10 max-w-md mx-auto lg:mx-0">
                <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter Your Room ID"
                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                    required
                  />
                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <button
                      onClick={submitHandler}
                      className="inline-flex px-6 py-3 text-lg font-bold text-white bg-pink-500 rounded-lg hover:bg-gray-600 transition"
                    >
                      Join Us Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={HeroImg}
                alt="Video Chat Hero"
                className="w-full sm:scale-150 animate-float"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
