import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-christmas-green text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>Made with <span className="text-red-400">❤️</span> for the holiday season</div>
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.4A4.6 4.6 0 1016.6 13 4.6 4.6 0 0012 8.4zM18.4 6a1.4 1.4 0 11-1.4 1.4A1.4 1.4 0 0118.4 6z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
