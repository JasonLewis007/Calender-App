// src/components/ReportPage.js
import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import Report from './Report';

const ReportPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { events } = location.state || { events: [] }; // Default to empty array if no state
  const reportRef = useRef();

  return (
    <div className="container">
      <h1 className="my-4">Calendar Plant Report</h1>
      <Button variant="primary" className="mb-4" onClick={() => navigate('/')}>
        Back to Calendar
      </Button>
      <ReactToPrint
        trigger={() => <Button variant="success" className="mb-4">Print Report</Button>}
        content={() => reportRef.current}
      />
      <div ref={reportRef}>
        <Report events={events} />
      </div>
    </div>
  );
};

export default ReportPage;


