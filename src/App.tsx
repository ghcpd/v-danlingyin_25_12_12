import React, { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import MultiSection from './pages/MultiSection'
import ComponentLibrary from './pages/ComponentLibrary'

const routes = [
  { id: 'landing', title: 'Landing Page' },
  { id: 'multi', title: 'Multi-Section' },
  { id: 'library', title: 'Component Library' }
]

export default function App() {
  const [route, setRoute] = useState(() => (location.hash.replace('#', '') || 'landing'))

  useEffect(() => {
    const onHash = () => setRoute(location.hash.replace('#', '') || 'landing')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-6 md:px-12 bg-gradient-to-r from-[#071029]/60 to-[#051021]/30 backdrop-blur-sm shadow-sm">
        <div className="container-max flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--red)] shadow-lg flex items-center justify-center text-white font-bold">CW</div>
            <div>
              <div className="text-sm text-slate-300">Christmas UI Cases</div>
              <div className="text-xs text-slate-400">A minimal festive kit</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            {routes.map(r => (
              <a key={r.id} href={`#${r.id}`} className={`px-4 py-2 rounded-md text-sm font-medium ${route===r.id? 'bg-white/6 ring-1 ring-white/6':''}`}>{r.title}</a>
            ))}
          </nav>

          <div className="ml-4 md:ml-0">
            <a href="#landing" className="inline-flex items-center gap-3 btn-glow bg-gradient-to-r from-[var(--red)] to-[var(--green)] px-4 py-2 rounded-full text-sm font-semibold shadow-glow-red">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {route === 'landing' && <LandingPage />}
        {route === 'multi' && <MultiSection />}
        {route === 'library' && <ComponentLibrary />}
      </main>

      <footer className="py-6 text-center text-sm text-slate-400">
        Built with a tiny sprinkle of holiday cheer — open <span className="font-medium text-slate-200">#landing</span>, <span className="font-medium text-slate-200">#multi</span> or <span className="font-medium text-slate-200">#library</span> in the URL to explore.
      </footer>
    </div>
  )
}
