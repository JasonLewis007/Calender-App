// src/components/Report.js
import React from 'react';

const Report = ({ events }) => {
  return (
    <div>
      <h2> Calendar Plant Report</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> on {event.start.toDateString()} - {event.plantDetails}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
