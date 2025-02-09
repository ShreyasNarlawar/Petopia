import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const loginData = {
      email,
      password,
    };

    try {
      setIsLoading(true); // Start loading

      const response = await fetch('https://localhost:44395/api/Users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const contentType = response.headers.get('Content-Type');
      let data;

      if (!response.ok) {
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
          setError(`Login failed: ${data.message || 'Unknown error'}`);
        } else {
          const errorMessage = await response.text();
          setError(`Login failed: ${errorMessage}`);
        }
      } else {
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
          console.log('Login successful:', data);

          // Store token in localStorage (if returned)
          if (data.token) {
            localStorage.setItem('authToken', data.token);
          }
        } else {
          // Handle plain text success response
          const message = await response.text();
          console.log('Login successful:', message);
        }

        setError(''); // Clear error
        navigate('/'); // Redirect to home/dashboard
      }
    } catch (error) {
      setError('An error occurred while logging in.');
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back!</h2>
      {error && <p className="error-message" aria-live="polite">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(''); // Clear error on input
            }}
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(''); // Clear error on input
            }}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="login-footer">
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
