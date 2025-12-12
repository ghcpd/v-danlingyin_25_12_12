import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">Made with <span className="text-red-500">❤️</span> for the holiday season</div>
        <div className="text-sm text-slate-600 mt-3 md:mt-0">© 2025 Christmas Wonderland</div>
      </div>
    </footer>
  )
}
