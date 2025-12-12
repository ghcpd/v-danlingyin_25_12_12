import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-lg text-christmas-red">Christmas Wonderland</div>
        <div className="flex gap-3">
          <Link to="/landing" className="text-sm text-gray-700 hover:text-christmas-red">Landing</Link>
          <Link to="/multi" className="text-sm text-gray-700 hover:text-christmas-green">Multi</Link>
          <Link to="/library" className="text-sm text-gray-700 hover:text-christmas-gold">Library</Link>
        </div>
      </div>
    </nav>
  )
}
