// src/components/PlantForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const PlantForm = ({ addEvent }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ name, startDate, endDate, details });
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setDetails('');
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="formPlantName">
        <Form.Label>Plant Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPlantDateRange">
        <Form.Label>Date Range</Form.Label>
        <Row>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formPlantDetails">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mr-2">
        Add Plant
      </Button>
      <Button variant="secondary" type="button" onClick={clearForm}>
        Clear
      </Button>
    </Form>
  );
};

export default PlantForm;
