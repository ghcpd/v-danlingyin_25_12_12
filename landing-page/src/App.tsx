import Hero from './components/Hero'
import Countdown from './components/Countdown'
import GiftGrid from './components/GiftGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-christmas-red to-christmas-green">
      <Hero />
      <Countdown />
      <GiftGrid />
      <Footer />
    </div>
  )
}

export default App