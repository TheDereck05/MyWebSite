import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Project from './pages/Project'


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
