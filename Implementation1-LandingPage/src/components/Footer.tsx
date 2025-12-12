import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <p className="text-lg sm:text-xl text-center text-slate-300">
            Made with ❤️ for the holiday season
          </p>

          <div className="flex gap-6 sm:gap-8">
            <a
              href="#"
              className="text-3xl hover:text-christmas-red transition-colors duration-300"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="text-3xl hover:text-christmas-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              📷
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-slate-700 w-full text-center">
            <p className="text-sm sm:text-base text-slate-400">
              © 2025 Christmas Wonderland. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
