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
import CompetitionPage from './pages/CompetitionPage/CompetitionPage'
import NewsroomPage from './pages/NewsroomPage/NewsroomPage'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/past-events" element={<PastEventsPage />} />
          <Route path="/competition" element={<CompetitionPage />} />
          <Route path="/newsroom" element={<NewsroomPage />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App