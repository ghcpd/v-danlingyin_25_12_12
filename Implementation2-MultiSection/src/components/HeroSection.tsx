import React from 'react';

export const HeroSection: React.FC = () => {
  const snowflakes = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-christmas-green via-slate-900 to-slate-900 overflow-hidden flex items-center justify-center">
      {snowflakes.map((key) => (
        <div
          key={key}
          className="absolute text-white animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${10 + Math.random() * 14}px`,
          }}
        >
          ❄️
        </div>
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Christmas
          <span className="block text-christmas-gold">Celebration</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-100 mb-8">
          Join us for an unforgettable holiday experience
        </p>
        <button className="px-10 py-4 bg-christmas-red text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:shadow-christmas-red/60 transition-all duration-300 hover:scale-110">
          Discover More
        </button>
      </div>
    </div>
  );
};
