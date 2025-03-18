import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.type]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201 || response.data.success) {
        // Redirect to your dashboard project directly
        window.location.href = "http://localhost:5174/";
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container signup-box text-center" style={{ marginTop: "6rem" }}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <small>login to continue</small>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
