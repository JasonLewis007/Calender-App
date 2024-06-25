// src/components/PlantForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PlantForm = ({ addEvent }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [details, setDetails] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addEvent({ name, date, details });
        setName('');
        setDate(new Date());
        setDetails('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Plant Name</label>
            <input type = "text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
        <label>Date</label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} required />
      </div>
      <div>
        <label>Details</label>
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} required />
      </div>
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default PlantForm;
   