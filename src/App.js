import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
const steps = [1, 2, 3];
export default function AudioParamMap() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const changeStep = function () {
    if (this === 'prev') {
      setStep((curr) => {
        return curr === steps[0] ? steps[steps.length - 1] : curr - 1;
      });
    }
    if (this === 'next')
      setStep((curr) => {
        return curr === steps[steps.length - 1] ? steps[0] : curr + 1;
      });
  };
  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
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
      )}
    </>
  );
}
