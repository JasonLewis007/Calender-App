import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Placeholder for fetching employee data from MySQL
    const fetchEmployees = async () => {
      // Replace with actual data fetching logic
      const employeeData = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ];
      setEmployees(employeeData);
    };

    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
