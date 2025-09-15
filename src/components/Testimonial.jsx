import React, { useState } from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "App Developer",
    message: "“This video calling app is intuitive and fast. Loved the features and smooth performance!”",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
  },
  {
    name: "Sophie Lee",
    role: "Project Manager",
    message: "“Excellent platform! Screen sharing and video quality are top-notch. Perfect for team meetings.”",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "UX Designer",
    message: "“Seamless experience. The UI is clean and user-friendly. I highly recommend this for remote work.”",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    role: "Marketing Specialist",
    message: "“Really impressed! Calls are stable even on slower connections. Great for collaborating remotely.”",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "Entrepreneur",
    message: "“The app is extremely user-friendly. My team can connect instantly without any setup hassles.”",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4,
  },
  {
    name: "Emily Smith",
    role: "Content Creator",
    message: "“Love the video quality and screen sharing features. Perfect for webinars and virtual events.”",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    rating: 5,
  },
];

const Testimonial = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-medium text-gray-600">Loved by our amazing users</p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Hear from our satisfied clients
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((t, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <img className="w-12 h-12 rounded-full object-cover" src={t.avatar} alt={t.name} />
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{t.message}</p>
              <div className="flex mt-3 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < t.rating ? "★" : "☆"}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-1 transition-all duration-200 hover:text-blue-600 hover:border-blue-600"
          >
            {showAll ? "Show Less" : "See all reviews"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
