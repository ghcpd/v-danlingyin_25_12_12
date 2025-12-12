import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🎁',
      title: 'Exclusive Gifts',
      description: 'Amazing prizes and exclusive offers for all attendees',
    },
    {
      icon: '🎉',
      title: 'Live Entertainment',
      description: 'Music, performances, and festive activities throughout',
    },
    {
      icon: '🍽️',
      title: 'Holiday Feast',
      description: 'Delicious seasonal treats and festive dining',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Fun',
      description: 'Activities for all ages and skill levels',
    },
    {
      icon: '✨',
      title: 'Magical Moments',
      description: 'Create unforgettable memories with loved ones',
    },
    {
      icon: '🎄',
      title: 'Festive Decor',
      description: 'Stunning Christmas wonderland atmosphere',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-slate-900 mb-16">
          Why Celebrate
          <span className="block text-christmas-red">With Us?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl sm:text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
