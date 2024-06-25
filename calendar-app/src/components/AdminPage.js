import React, { useContext } from 'react';
import { EmployeeContext } from '../EmployeeContext';
import { EventContext } from '../EventContext';
import Report from './Report';

const AdminPage = () => {
  const { employees } = useContext(EmployeeContext);
  const { events } = useContext(EventContext);

  return (
    <div className="container">
      <h1 className="my-4">Admin Page</h1>
      <div className="form-group">
        <label htmlFor="employeeSelect">Select Employee:</label>
        <select className="form-control" id="employeeSelect">
          <option value="">Select an employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <h2>Generate Report</h2>
        <Report events={events} />
      </div>
    </div>
  );
};

export default AdminPage;

