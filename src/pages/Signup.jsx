import React, { useEffect, useState } from 'react';
import '../style.css';
import { initFormToggle } from './script';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    initFormToggle();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (validateForm()) {
      // Here you can add your backend call for sign-up
      navigate('/');  // Navigate to home or wherever you want after successful sign-up
    }
  };

  const handleLogin = () => {
    // You could also add form validation for login
    navigate('/');  // Navigate to home or login page
  };

  return (
    <section>
      <div className="form-wrapper">
        <div className="form-structor">
          <div className="signup" id="signup">
            <h2 className="form-title"><span>or</span>Sign up</h2>
            <div className="form-holder">
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
              
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button className="submit-btn" onClick={handleSignup}>Sign up</button>
          </div>

          <div className="login slide-up" id="login">
            <div className="center">
              <h2 className="form-title"><span>or</span>Log in</h2>
              <div className="form-holder">
                <input type="email" className="input" placeholder="Email" />
                <input type="password" className="input" placeholder="Password" />
              </div>
              <button className="submit-btn" onClick={handleLogin}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
