import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PlantForm from './PlantForm';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (plant) => {
    const newEvent = {
      title: plant.name,
      start: new Date(plant.date),
      end: new Date(plant.date),
      plantDetails: plant.details,
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h1>HarperLove Plant Calendar</h1>
      <PlantForm addEvent={addEvent} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;


