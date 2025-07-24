import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

const Step1 = ({ onNext }) => {
  const { userData, updateUserData } = useContext(UserContext);
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setName(userData.name);
    setEmail(userData.email);
  }, [userData]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateUserData({ name, email });
      onNext();
    }
  };

  return (
    <div>
      <h2>Step 1: Name & Email</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
