import React, { useState } from 'react';
import { UserProvider } from './UserContext';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <UserProvider>
      <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
        <h1>Multi-Step Signup</h1>
        <ProgressBar step={step} />
        {!submitted ? (
          <>
            {step === 0 && <Step1 onNext={nextStep} />}
            {step === 1 && <Step2 onNext={nextStep} onBack={prevStep} />}
            {step === 2 && <Step3 onBack={prevStep} onSubmit={handleSubmit} />}
          </>
        ) : (
          <div>
            <h2>Thank you for signing up!</h2>
            <p>Your information has been submitted successfully.</p>
          </div>
        )}
      </div>
    </UserProvider>
  );
};

export default App;
