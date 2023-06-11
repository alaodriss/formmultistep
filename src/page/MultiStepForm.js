import React, { useState } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';


const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const ProgressBar = ({ step }) => {
    return (
      <div>
        Step {step} of 3:
        <progress value={step} max="3" />
      </div>
    );
  };
  


  const renderForm = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      // case 3:
      //   return <Step3 prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ProgressBar step={step} />
      {renderForm()}
    </div>
  );
};

export default MultiStepForm;
