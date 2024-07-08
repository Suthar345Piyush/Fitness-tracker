import React  from 'react';
import './StepCounter.css';


const StepCounter = ({steps, setSteps}) => {
  const handleStepChange = (e) => {
    setSteps(Number(e.target.value));
  };





// const StepCounter = () => {
//   const [steps, setSteps] = useState(0);



//   const handleStepChange = (e) => {
//     setSteps(Number(e.target.value));
//   };



  return(
    <div className="step-counter">
      <h2>Step Counter</h2>
      <input 
      type="number" 
      value={steps} 
      onChange={handleStepChange} 
      min="0"
    />
      <p>Total Steps: {steps}</p>
    </div>
  );
}


export default StepCounter;
