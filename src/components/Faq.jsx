import React, { useState } from 'react';
import { FaUserFriends, FaBook, FaBalanceScale, FaBolt, FaVideo, FaBug, FaShieldAlt, FaDesktop, FaUsers } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    { question: "How to boost productivity at work?", answer: "Try focusing on one task at a time, taking short breaks, and eliminating distractions. Using productivity tools and planning your day can also help you achieve more efficiently.", icon: <FaBolt className="text-blue-500 w-5 h-5 mr-3" /> },
    { question: "What are the best books to read for personal growth?", answer: "Some popular books for personal development include Atomic Habits by James Clear, The Power of Now by Eckhart Tolle, and Deep Work by Cal Newport.", icon: <FaBook className="text-green-500 w-5 h-5 mr-3" /> },
    { question: "How to maintain a healthy work-life balance?", answer: "Set clear boundaries between work and personal time, schedule breaks, and make time for hobbies, exercise, and relaxation to stay refreshed.", icon: <FaBalanceScale className="text-purple-500 w-5 h-5 mr-3" /> },
    { question: "How to stay motivated on a challenging project?", answer: "Break the project into smaller tasks, celebrate small wins, seek support from colleagues, and remind yourself of the end goal to stay motivated.", icon: <FaUserFriends className="text-yellow-500 w-5 h-5 mr-3" /> },
    { question: "Can I join a call without creating an account?", answer: "Yes! No registration is required—just click the invite link and join instantly.", icon: <FaVideo className="text-red-500 w-5 h-5 mr-3" /> },
    { question: "What should I do if the call lags or freezes?", answer: "Close other apps, switch to a better network, or lower the video quality to improve performance.", icon: <FaDesktop className="text-pink-500 w-5 h-5 mr-3" /> },
    { question: "How can I report a problem or bug?", answer: "Use the “Reach out to us” link or contact our support team with details about the issue.", icon: <FaBug className="text-orange-500 w-5 h-5 mr-3" /> },
    { question: "Is my video call data secure?", answer: "All video calls are encrypted end-to-end, ensuring your conversations are private and secure.", icon: <FaShieldAlt className="text-teal-500 w-5 h-5 mr-3" /> },
    { question: "Can I share my screen during a call?", answer: "Yes! You can share your entire screen or a specific application window with other participants seamlessly.", icon: <FaDesktop className="text-indigo-500 w-5 h-5 mr-3" /> },
    { question: "How many participants can join a single call?", answer: "Our platform supports up to 50 participants per call, making it ideal for small team meetings or webinars.", icon: <FaUsers className="text-blue-600 w-5 h-5 mr-3" /> },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4); // Show first 4 by default

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-purple-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            You Have Questions, We Have Answers!
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Have a question in mind? Check out the most common ones below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 hover:text-blue-600 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  {faq.icon}
                  <span className="text-lg font-semibold text-black">{faq.question}</span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 pb-5 sm:pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-1 transition-all duration-200 hover:text-blue-600 hover:border-blue-600"
          >
            {showAll ? "Show Less" : "See More Questions"}
          </button>
        </div>

        {/* Reach Out paragraph */}
        <p className="text-center text-gray-600 text-base mt-6">
          Still have questions on your mind?{' '}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Reach out to us
          </a>{' '}
          for personalized assistance.
        </p>
      </div>
    </section>
  );
};

export default Faq;
