
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import StepCounter from './Components/StepCounter';
import CalorieTracker from './Components/CalorieTracker';
import Summary from './Components/Summary';
import './App.css';





const App = () => {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);





  useEffect(() => {
    // Check localStorage for previous values on mount
    const savedSteps = localStorage.getItem('steps');
    const savedCalories = localStorage.getItem('calories');
    



    if (savedSteps && savedCalories) {
      setSteps(Number(savedSteps));
      setCalories(Number(savedCalories));




      // Clear localStorage after first load
      localStorage.removeItem('steps');
      localStorage.removeItem('calories');
    }
  }, []);



  useEffect(() => {
    // Store the current values in localStorage
    localStorage.setItem('steps', steps);
    localStorage.setItem('calories', calories);
  }, [steps, calories]);





  
  return (
    <div className="app">
      <Header />
      <div className="trackers">
        <StepCounter steps={steps} setSteps={setSteps} />
        <CalorieTracker calories={calories} setCalories={setCalories} />
        <Summary steps={steps} calories={calories} />
      </div>
    </div>
  );
}

export default App;
