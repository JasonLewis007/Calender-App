import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Styles/CalendarStyles.css';
import PlantForm from './PlantForm';
import EventModal from './EventModal';
import { EventContext } from '../EventContext';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { events, setEvents } = useContext(EventContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventIdCounter, setEventIdCounter] = useState(0);
  const navigate = useNavigate();

  const addEvent = (plant) => {
    const newEvent = {
      id: eventIdCounter,
      title: plant.name,
      start: new Date(plant.startDate),
      end: new Date(plant.endDate),
      details: plant.details,
    };
    setEvents([...events, newEvent]);
    setEventIdCounter(eventIdCounter + 1);
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
      setEvents(events.map(ev => (ev.id === selectedEvent.id ? event : ev)));
    } else {
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

  const navigateToReport = () => {
    navigate('/report', { state: { events } });
  };

  const navigateToAdmin = () => {
    navigate('/admin');
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
      <button className="btn btn-primary mt-4" onClick={navigateToReport}>
        Show Report
      </button>
      <button className="btn btn-secondary mt-4 ml-2" onClick={navigateToAdmin}>
        Admin Login
      </button>
    </div>
  );
};

export default MyCalendar;









