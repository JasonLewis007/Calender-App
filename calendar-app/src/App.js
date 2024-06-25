// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyCalendar from './components/Calendar';
import ReportPage from './components/ReportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyCalendar />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;


