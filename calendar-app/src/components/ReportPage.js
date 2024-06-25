import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import Report from './Report';
import { useAuth } from '../AuthContext';

const ReportPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { events: filteredEvents, employee } = location.state || { events: [], employee: '' };
  const [events, setEvents] = useState(filteredEvents);
  const reportRef = useRef();

  useEffect(() => {
    setEvents(filteredEvents);
    console.log('Received events for report:', filteredEvents); // Debug line
  }, [filteredEvents]);

  return (
    <div className="container">
      <h1 className="my-4">{user.role === 'admin' ? 'Employee Plant Report' : 'Plant Calendar'}</h1>
      <div className="mb-4">
        <Button variant="primary" onClick={() => navigate('/')}>
          Back to Calendar
        </Button>
        <ReactToPrint
          trigger={() => <Button variant="success" className="ml-2">Print Report</Button>}
          content={() => reportRef.current}
        />
      </div>
      <div ref={reportRef}>
        <h2>{employee ? `Report for ${employee}` : 'Report for All Employees'}</h2>
        <Report events={events} />
      </div>
    </div>
  );
};

export default ReportPage;







