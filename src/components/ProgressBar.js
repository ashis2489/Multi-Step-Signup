import React from 'react';

const ProgressBar = ({ step }) => {
  const steps = ['Name & Email', 'Address & Phone', 'Review & Submit'];

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      {steps.map((label, index) => {
        const isActive = index === step;
        const isCompleted = index < step;
        return (
          <div
            key={index}
            style={{
              flex: 1,
              padding: '10px',
              textAlign: 'center',
              borderBottom: isActive ? '3px solid blue' : '3px solid lightgray',
              color: isActive || isCompleted ? 'blue' : 'gray',
              fontWeight: isActive ? 'bold' : 'normal',
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
