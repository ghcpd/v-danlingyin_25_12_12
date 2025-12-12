import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-christmas-gold mb-4">
              About
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Christmas Celebration 2025 brings the magic of the holidays to life.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-christmas-gold mb-4">
              Quick Links
            </h3>
            <ul className="text-slate-400 text-sm sm:text-base space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Events</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-christmas-gold mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 text-2xl sm:text-3xl">
              <a href="#" className="hover:text-christmas-red transition">f</a>
              <a href="#" className="hover:text-christmas-gold transition">📷</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 sm:pt-12 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            Made with ❤️ for the holiday season | © 2025 Christmas Celebration
          </p>
        </div>
      </div>
    </footer>
  );
};
