import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [fname, setfName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [location, setLocation] = useState('');
    const [role, setRole] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const navigate = useNavigate(); // Initialize useNavigate

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return regex.test(password);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // Validate password strength
        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Check for missing fields
        if (!fname || !email || !location || !password || !phonenumber || !role) {
            setError('Please fill in all fields.');
            return;
        }

        // Ensure the correct fields are being passed with the correct keys
        const registrationData = {
            Name: fname, // Ensure this key matches the expected key in the backend (could be 'Name')
            email,
            location,
            password,
            phoneNo: phonenumber,  // Ensure this matches the expected key in the backend
            userRole: role,         // Ensure this matches the expected key in the backend
        };

        try {
            setIsLoading(true); // Start loading

            // Make a POST request to the backend API
            const response = await fetch('https://localhost:44395/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            if (!response.ok) {
                // Log the server response to inspect errors
                const errorResponse = await response.text(); // You can use response.json() if it's a JSON response
                console.log('Error response from server:', errorResponse);
                setError(`Registration failed: ${errorResponse}`);
            } else {
                // Registration was successful
                setError('');
                setSuccessMessage('Registration successful! Redirecting to login...');
                console.log('Registration successful:', await response.json());

                // Redirect after delay
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            setError('An error occurred during registration. Please try again.');
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Register for Our Great Service</h2>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form className="register-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="fname">Full Name</label>
                    <input
                        type="text"
                        id="fname"
                        value={fname}
                        onChange={(e) => setfName(e.target.value)}
                        required
                        placeholder="Enter Your Full Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        placeholder="Enter Your Location"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">What do you want to do?</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select your role</option>
                        <option value="both">Both</option>
                        <option value="donor">Donor</option>
                        <option value="adopter">Adopter</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        placeholder="Enter Your Contact Number"
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
                        placeholder="Enter Your Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm Your Password"
                    />
                </div>
                <button type="submit" className="register-button" disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
            <p className="register-footer">
                Already have an account? <a href="/login">Log in</a>
            </p>
        </div>
    );
};

export default Register;
