import React from 'react';
import '../Styles/Report.css'; // Import the CSS file

const Report = ({ events }) => {
  return (
    <div className="container">
      <h2 className="my-4"> Harper Love Calendar Plant Report</h2>
      <div className="list-group">
        {events.map((event, index) => (
          <div key={index} className="list-group-item">
            <h5 className="mb-1">{event.title}</h5>
            <p className="mb-1"><strong>Details:</strong> {event.details}</p>
            <p className="mb-1"><strong>Date Range:</strong> {new Date(event.start).toLocaleDateString()} - {new Date(event.end).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;





