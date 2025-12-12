import React, { useEffect, useState } from 'react'

function getTimeLeft(){
  const now = new Date()
  const year = now.getFullYear()
  const target = new Date(`${year}-12-25T00:00:00`)
  if(now > target){
    target.setFullYear(year + 1)
  }
  const diff = target.getTime() - now.getTime()
  const seconds = Math.floor(diff/1000) % 60
  const minutes = Math.floor(diff/(1000*60)) % 60
  const hours = Math.floor(diff/(1000*60*60)) % 24
  const days = Math.floor(diff/(1000*60*60*24))
  return { days, hours, minutes, seconds }
}

export default function Countdown(){
  const [time, setTime] = useState(getTimeLeft())

  useEffect(()=>{
    const id = setInterval(()=>{
      setTime(getTimeLeft())
    },1000)
    return ()=> clearInterval(id)
  },[])

  const block = (label:string, value:number) => (
    <div className="w-20 md:w-28 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md text-center">
      <div className="text-2xl md:text-3xl font-bold">{String(value).padStart(2,'0')}</div>
      <div className="text-xs text-slate-600 mt-1">{label}</div>
    </div>
  )

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Countdown to December 25</h2>
      <div className="flex justify-center gap-4">
        {block('Days', time.days)}
        {block('Hours', time.hours)}
        {block('Minutes', time.minutes)}
        {block('Seconds', time.seconds)}
      </div>
    </section>
  )
}
