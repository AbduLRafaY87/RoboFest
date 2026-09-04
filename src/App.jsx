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
import Association from './pages/AboutPage/Association'
import Vision from './pages/AboutPage/VIsion'
import Competition2025 from './pages/PastEventsPage/Competition2025'
import Competition2026 from './pages/PastEventsPage/Competition2026'
import FAQsPage from './pages/FAQPage/Faqs'
import MediaPage from './pages/MediaPage/MediaPage'
import Stories from './pages/StoriesPage/Stories'
import Competition2022 from './pages/PastEventsPage/Competition2022'
import Competition2023 from './pages/PastEventsPage/Competition2023'
import Competition2024 from './pages/PastEventsPage/Competition2024'

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
          <Route path="/competition/2026" element={<Competition2026/>} />
          <Route path="/events/2025" element={<Competition2025/>} />
          <Route path="/events/2024" element={<Competition2024/>} />
          <Route path="/events/2023" element={<Competition2023/>} />
          <Route path="/events/2022" element={<Competition2022/>} />
          <Route path="/competition/faq" element={<FAQsPage/>} />
          <Route path="/newsroom/archive" element={<MediaPage/>} />
          <Route path="/newsroom/story" element={<Stories/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App