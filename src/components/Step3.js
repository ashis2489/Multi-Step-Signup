import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Step3 = ({ onBack, onSubmit }) => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h2>Step 3: Review & Submit</h2>
      <div>
        <strong>Name:</strong> {userData.name}
      </div>
      <div>
        <strong>Email:</strong> {userData.email}
      </div>
      <div>
        <strong>Address:</strong> {userData.address}
      </div>
      <div>
        <strong>Phone:</strong> {userData.phone}
      </div>
      <button onClick={onBack}>Back</button>{' '}
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
