import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Styles/CalendarStyles.css';
import PlantForm from './PlantForm';
import EventModal from './EventModal';
import { EventContext } from '../EventContext';
import { useAuth } from '../AuthContext';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { events, setEvents } = useContext(EventContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventIdCounter, setEventIdCounter] = useState(0);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const addEvent = (plant) => {
    const newEvent = {
      id: eventIdCounter,
      title: user.username,  // Set the title to the username
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
    const userEvents = events.filter(event => event.title === user.username);
    console.log('Navigating to report with events:', userEvents); // Debug line
    navigate('/report', { state: { events: userEvents, employee: user.username } });
  };

  const navigateToAdmin = () => {
    navigate('/admin');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
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
      <div className="d-flex justify-content-between mt-4">
        {user && (
          <button className="btn btn-primary" onClick={navigateToReport}>
            Show Report
          </button>
        )}
        {user && user.role === 'admin' && (
          <button className="btn btn-secondary ml-2" onClick={navigateToAdmin}>
            Admin Login
          </button>
        )}
        {user && (
          <button className="btn btn-danger ml-2" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default MyCalendar;
















