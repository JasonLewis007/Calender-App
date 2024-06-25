import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../EmployeeContext';
import { EventContext } from '../EventContext';
import { useAuth } from '../AuthContext';

const AdminPage = () => {
  const { employees } = useContext(EmployeeContext);
  const { events } = useContext(EventContext);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const generateReport = () => {
    let employeeEvents = events;
    if (selectedEmployee) {
      employeeEvents = events.filter(event => event.title === selectedEmployee);
    }
    navigate('/report', { state: { events: employeeEvents, employee: selectedEmployee } });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <h1 className="my-4">Admin Page</h1>
      <div className="form-group">
        <label htmlFor="employeeSelect">Select Employee:</label>
        <select className="form-control" id="employeeSelect" value={selectedEmployee} onChange={handleEmployeeChange}>
          <option value="">Select an employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={generateReport}>Generate Report</button>
      </div>
      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminPage;





