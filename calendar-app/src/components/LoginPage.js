import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, role);
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="my-4">Login</h1>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select
          className="form-control"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;


