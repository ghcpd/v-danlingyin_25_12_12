import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const snowflakes = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Snowfall animation */}
      {snowflakes.map((key) => (
        <div
          key={key}
          className="absolute text-white animate-snowfall opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${8 + Math.random() * 16}px`,
          }}
        >
          ❄️
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Christmas Wonderland
            <span className="block text-christmas-red">2025</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Celebrate the magic with us
          </p>

          <button className="relative px-8 sm:px-12 py-3 sm:py-4 bg-christmas-red text-white font-bold text-lg sm:text-xl rounded-lg shadow-lg hover:shadow-2xl hover:shadow-christmas-red/50 transition-all duration-300 transform hover:scale-105">
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
};
