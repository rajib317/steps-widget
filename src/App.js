import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
const steps = [1, 2, 3];
export default function AudioParamMap() {
  const [step, setStep] = useState(1);
  const changeStep = function () {
    if (this === 'prev')
      setStep((old) => {
        return old === 1 ? steps[steps.length - 1] : step - 1;
      });
    if (this === 'next')
      setStep((old) => {
        return old === steps[steps.length - 1] ? 1 : step + 1;
      });
  };
  return (
    <div className='steps'>
      <div className='numbers'>
        {steps.map((s) => (
          <div key={s} className={s === step ? 'active' : ''}>
            {s}
          </div>
        ))}
      </div>
      <p className='message'>
        Step {step} : {messages[step - 1]}
      </p>
      <div className='buttons'>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={changeStep.bind('prev')}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={changeStep.bind('next')}
        >
          Next
        </button>
      </div>
    </div>
  );
}
