import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

// Import Page Components
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import JoinPage from './pages/JoinPage/JoinPage'
import PastEventsPage from './pages/PastEventsPage/PastEventsPage'
// import CompetitionPage from './pages/CompetitionPage/CompetitionPage'
import NewsroomPage from './pages/NewsroomPage/NewsroomPage'
import Association from './pages/AboutPage/Association'
import Vision from './pages/AboutPage/VIsion'
import Competition2025 from './pages/PastEventsPage/Competition2025'
import Competition2026 from './pages/PastEventsPage/Competition2026'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/association" element={<Association/>} />
          <Route path="/vision" element={<Vision/>} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/past-events" element={<PastEventsPage />} />
          <Route path="/events/2025" element={<Competition2025/>} />
          <Route path="/competition/2026" element={<Competition2026/>} />
          <Route path="/newsroom" element={<NewsroomPage />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App