import React from 'react'
import { FacebookIcon, InstagramIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#03111a]/40 to-transparent py-10">
      <div className="container-max px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-white font-semibold">Made with <span aria-hidden>❤️</span> for the holiday season</div>
          <div className="text-sm text-slate-300 mt-1">Christmas Wonderland 2025</div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="facebook" className="w-10 h-10 rounded-lg bg-white/6 p-2 flex items-center justify-center">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="instagram" className="w-10 h-10 rounded-lg bg-white/6 p-2 flex items-center justify-center">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
