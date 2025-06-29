import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-pink-600">SahaaraAI</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Empowering doctors with instant medical translations and triage assistance for patients in Urdu, Pashto & Punjabi.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
          Try the App
        </button>
      </div>
    </section>
  );
}
