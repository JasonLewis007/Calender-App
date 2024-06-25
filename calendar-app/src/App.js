import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './EventContext';
import { EmployeeProvider } from './EmployeeContext';
import MyCalendar from './components/Calendar';
import ReportPage from './components/ReportPage';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <EventProvider>
      <EmployeeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MyCalendar />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Router>
      </EmployeeProvider>
    </EventProvider>
  );
}

export default App;




