import React, { useEffect, useState } from 'react'

function getTargetDate() {
  const now = new Date()
  const year = now.getFullYear()
  const targetThisYear = new Date(`${year}-12-25T00:00:00`)
  if (now > targetThisYear) {
    return new Date(`${year + 1}-12-25T00:00:00`)
  }
  return targetThisYear
}

function getDiff(to: Date) {
  const now = new Date()
  const diff = Math.max(0, Math.floor((to.getTime() - now.getTime()) / 1000))
  const days = Math.floor(diff / 86400)
  const hours = Math.floor((diff % 86400) / 3600)
  const minutes = Math.floor((diff % 3600) / 60)
  const seconds = diff % 60
  return { days, hours, minutes, seconds }
}

export default function Countdown({ className = '' }: { className?: string }) {
  const [target] = useState<Date>(() => getTargetDate())
  const [time, setTime] = useState(getDiff(target))

  useEffect(() => {
    const t = setInterval(() => setTime(getDiff(target)), 1000)
    return () => clearInterval(t)
  }, [target])

  const Block = ({ label, value }: { label: string; value: number }) => (
    <div className="flex-1 min-w-[64px] px-4 py-3 bg-white/6 rounded-xl text-center">
      <div className="text-2xl md:text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
      <div className="text-xs text-white/80 mt-1">{label}</div>
    </div>
  )

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Block label="Days" value={time.days} />
        <Block label="Hours" value={time.hours} />
        <Block label="Minutes" value={time.minutes} />
        <Block label="Seconds" value={time.seconds} />
      </div>
    </div>
  )
}
