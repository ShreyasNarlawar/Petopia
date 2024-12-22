import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import './Login.css'; // Importing CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (email && password) {
      console.log('Email:', email);
      console.log('Password:', password);
      // Simulate successful login and redirect
      history.push('/'); // Redirect to home or dashboard after login
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back!</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="login-footer">
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
};

export default Login;