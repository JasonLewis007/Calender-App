// src/components/EventModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventModal = ({ show, handleClose, handleSave, handleDelete, event }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [details, setDetails] = useState('');

  useEffect(() => {
    if (event) {
      setName(event.title || event.name); // Ensure compatibility with existing events
      setStartDate(new Date(event.start));
      setEndDate(new Date(event.end));
      setDetails(event.details || event.plantDetails);
    } else {
      setName('');
      setStartDate(new Date());
      setEndDate(new Date());
      setDetails('');
    }
  }, [event]);

  const handleSubmit = () => {
    handleSave({ ...event, title: name, start: startDate, end: endDate, details });
    handleClose();
  };

  const handleDeleteEvent = () => {
    handleDelete(event);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{event ? 'Edit Plant' : 'Add Plant'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formEventName">
            <Form.Label>Plant</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEventDateRange">
            <Form.Label>Date Range</Form.Label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="form-control"
                placeholderText="Start Date"
                required
              />
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="form-control"
                placeholderText="End Date"
                required
              />
            </div>
          </Form.Group>
          <Form.Group controlId="formEventDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {event && (
          <Button variant="danger" onClick={handleDeleteEvent}>
            Delete
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;



