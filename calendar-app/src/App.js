import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './EventContext';
import { EmployeeProvider } from './EmployeeContext';
import { AuthProvider } from './AuthContext';
import MyCalendar from './components/Calendar';
import ReportPage from './components/ReportPage';
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <EmployeeProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<ProtectedRoute><MyCalendar /></ProtectedRoute>} />
              <Route path="/report" element={<ProtectedRoute><ReportPage /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
            </Routes>
          </Router>
        </EmployeeProvider>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;






