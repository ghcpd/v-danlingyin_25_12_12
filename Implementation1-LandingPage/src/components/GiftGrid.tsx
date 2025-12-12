import React from 'react';

interface GiftCardProps {
  title: string;
  description: string;
  icon: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
    <div className="bg-gradient-to-br from-christmas-red to-christmas-gold p-6 sm:p-8 text-center">
      <div className="text-5xl sm:text-6xl mb-4">{icon}</div>
    </div>
    <div className="p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

export const GiftGrid: React.FC = () => {
  const gifts = [
    {
      title: 'Joy & Laughter',
      description: 'Share unforgettable moments with loved ones',
      icon: '🎁',
    },
    {
      title: 'Festive Cheer',
      description: 'Celebrate traditions and create new memories',
      icon: '🎄',
    },
    {
      title: 'Winter Wonder',
      description: 'Experience the magic of the season',
      icon: '❄️',
    },
    {
      title: 'Warm Gatherings',
      description: 'Connect with family and friends',
      icon: '🏠',
    },
    {
      title: 'Special Treats',
      description: 'Indulge in delightful holiday flavors',
      icon: '🍪',
    },
    {
      title: 'Bright Lights',
      description: 'Illuminate your holidays with sparkle',
      icon: '✨',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12 drop-shadow-lg">
          Festive Gifts Await
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gifts.map((gift, index) => (
            <GiftCard key={index} {...gift} />
          ))}
        </div>
      </div>
    </section>
  );
};
