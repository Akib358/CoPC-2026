import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProgrammingContest from './pages/ProgrammingContest'
import Hackathon from './pages/Hackathon'
import Timeline from './pages/Timeline'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programming-contest" element={<ProgrammingContest />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}