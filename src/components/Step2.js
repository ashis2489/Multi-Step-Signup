import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

const Step2 = ({ onNext, onBack }) => {
  const { userData, updateUserData } = useContext(UserContext);
  const [address, setAddress] = useState(userData.address);
  const [phone, setPhone] = useState(userData.phone);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setAddress(userData.address);
    setPhone(userData.phone);
  }, [userData]);

  const validate = () => {
    const newErrors = {};
    if (!address.trim()) newErrors.address = 'Address is required';
    if (!phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\\+?[0-9\\s\\-]{7,15}$/.test(phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateUserData({ address, phone });
      onNext();
    }
  };

  return (
    <div>
      <h2>Step 2: Address & Phone</h2>
      <div>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      </div>
      <button onClick={onBack}>Back</button>{' '}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
