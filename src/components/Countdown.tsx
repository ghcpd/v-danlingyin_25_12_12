import React, { useEffect, useState } from 'react'

function getTimeLeft(deadline: Date) {
  const now = new Date().getTime()
  const diff = deadline.getTime() - now
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days: Math.max(days, 0), hours: Math.max(hours, 0), minutes: Math.max(minutes, 0), seconds: Math.max(seconds, 0) }
}

export default function Countdown({ date }: { date: Date }) {
  const [time, setTime] = useState(() => getTimeLeft(date))
  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft(date)), 1000)
    return () => clearInterval(t)
  }, [date])
  return (
    <div className="flex gap-3 justify-center items-center">
      {['days', 'hours', 'minutes', 'seconds'].map((key) => (
        <div key={key} className="bg-white p-3 rounded-md shadow-md w-20 text-center">
          <div className="text-sm text-gray-500 uppercase">{key}</div>
          <div className="text-xl font-bold">
            {String((time as any)[key]).padStart(2, '0')}
          </div>
        </div>
      ))}
    </div>
  )
}
