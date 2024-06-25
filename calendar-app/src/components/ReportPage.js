import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import Report from './Report';
import { EventContext } from '../EventContext';

const ReportPage = () => {
  const navigate = useNavigate();
  const { events } = useContext(EventContext);
  const reportRef = useRef();

  return (
    <div className="container">
      <h1 className="my-4">Calendar Plant Report</h1>
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
        <Report events={events} />
      </div>
    </div>
  );
};

export default ReportPage;




