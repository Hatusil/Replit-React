import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamCards from './TeamCards';

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<TeamCards />} />
        </Routes>
      </Router>
    </main>
  )
}
