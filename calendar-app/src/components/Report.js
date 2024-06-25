// src/components/Report.js
import React from 'react';

const Report = ({ events }) => {
  return (
    <div>
      <h2>Calendar Plant Report</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>Plant Name:</strong> {event.title} <br />
            <strong>Details:</strong> {event.details} <br />
            <strong>Date Range:</strong> {event.start.toDateString()} to {event.end.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;




