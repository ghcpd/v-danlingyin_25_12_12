import React, { useState } from 'react';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-christmas-red via-christmas-green to-christmas-gold px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Ready to Join the Magic?
        </h2>
        <p className="text-xl sm:text-2xl text-slate-100 mb-10 max-w-2xl mx-auto">
          Sign up now to get exclusive updates, early bird discounts, and special surprises.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 sm:py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 sm:py-4 bg-white text-christmas-red font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-white text-lg font-semibold animate-pulse">
            ✓ Thank you! Check your email for details.
          </p>
        )}
      </div>
    </section>
  );
};
