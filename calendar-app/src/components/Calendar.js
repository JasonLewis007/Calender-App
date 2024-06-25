// src/components/Calendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Styles/CalendarStyles.css';
import PlantForm from './PlantForm';
import EventModal from './EventModal';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventIdCounter, setEventIdCounter] = useState(0); // Add an event ID counter

  const addEvent = (plant) => {
    const newEvent = {
      id: eventIdCounter, // Assign a unique ID to each event
      title: plant.name,
      start: new Date(plant.startDate),
      end: new Date(plant.endDate),
      details: plant.details,
    };
    setEvents([...events, newEvent]);
    setEventIdCounter(eventIdCounter + 1); // Increment the counter
  };

  const handleSelectSlot = ({ start, end }) => {
    setSelectedEvent({ start, end });
    setShowModal(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleSaveEvent = (event) => {
    if (selectedEvent && selectedEvent.id != null) {
      // Edit existing event
      setEvents(events.map(ev => (ev.id === selectedEvent.id ? event : ev)));
    } else {
      // Add new event
      setEvents([...events, { ...event, id: eventIdCounter }]);
      setEventIdCounter(eventIdCounter + 1);
    }
    setSelectedEvent(null);
    setShowModal(false);
  };

  const handleDeleteEvent = (event) => {
    setEvents(events.filter(ev => ev.id !== event.id));
    setSelectedEvent(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1 className="my-4">HarperLove Plant Calendar</h1>
      <PlantForm addEvent={addEvent} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />
      <EventModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveEvent}
        handleDelete={handleDeleteEvent}
        event={selectedEvent}
      />
    </div>
  );
};

export default MyCalendar;






