import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage'
import MultiSectionPage from './pages/MultiSectionPage'
import ComponentLibrary from './pages/ComponentLibrary'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-green-50 p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-christmas-red">Christmas UI Samples</h1>
        <p className="text-gray-600">Three UI cases: Landing, Multi-section, Component Library</p>
        <div className="flex justify-center gap-4">
          <Link to="/landing" className="px-4 py-2 rounded bg-christmas-green text-white">Landing</Link>
          <Link to="/multi" className="px-4 py-2 rounded bg-christmas-red text-white">Multi</Link>
          <Link to="/library" className="px-4 py-2 rounded bg-christmas-gold text-white">Library</Link>
        </div>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/multi" element={<MultiSectionPage />} />
        <Route path="/library" element={<ComponentLibrary />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
