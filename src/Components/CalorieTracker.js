import React from 'react';
import './CalorieTracker.css';




const CalorieTracker  = ({ calories, setCalories}) => {
  const handleCalorieChange = (e) => {
    setCalories(Number(e.target.value));
  };


  return(
    <div className="calorie-tracker">
      <h2>Calorie Tracker</h2>
      <input 
      type="number" 
      value={calories} 
      onChange={handleCalorieChange} 
      min="0"
    />
      <p>Total Calorie: {calories}</p>
    </div>
  );
}



export default CalorieTracker;