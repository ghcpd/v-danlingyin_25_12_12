import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-12 bg-white/80">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">Made with <span className="text-red-500">❤️</span> for the holiday season</div>
        <div className="flex gap-3 mt-3 md:mt-0">
          <a href="#" aria-label="facebook" className="p-2 rounded-full bg-white shadow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="instagram" className="p-2 rounded-full bg-white shadow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
        </div>
      </div>
    </footer>
  )
}
