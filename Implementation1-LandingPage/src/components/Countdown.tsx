import React, { useEffect, useState } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const christmas = new Date(currentYear, 11, 25);
      
      if (now > christmas) {
        christmas.setFullYear(currentYear + 1);
      }

      const difference = christmas.getTime() - now.getTime();

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeBlock: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-christmas-gold text-christmas-red font-bold text-2xl sm:text-4xl w-16 sm:w-24 h-16 sm:h-24 flex items-center justify-center rounded-lg shadow-lg">
        {String(value).padStart(2, '0')}
      </div>
      <p className="text-white font-semibold text-sm sm:text-base uppercase tracking-wider">{label}</p>
    </div>
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-christmas-red to-christmas-green px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Countdown to Christmas
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <TimeBlock value={time.days} label="Days" />
          <TimeBlock value={time.hours} label="Hours" />
          <TimeBlock value={time.minutes} label="Minutes" />
          <TimeBlock value={time.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};
