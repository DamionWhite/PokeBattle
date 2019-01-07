import React from 'react';
import './HealthBar.css';

const HealthBar = function HealthBar(props) {
  const { currentHealth, health } = props;
  const healthPercentage = Math.floor(currentHealth / health * 100);
  let healthColor;
  if (healthPercentage <= 25) {
    healthColor = 'linear-gradient(hsl(0, 100%, 75%), hsl(0, 100%, 45%))';
  } else if (healthPercentage <= 50) {
    healthColor = 'linear-gradient(hsl(59, 100%, 75%), hsl(59, 100%, 45%))';
  } else {
    healthColor = 'linear-gradient(hsl(120, 100%, 75%), hsl(120, 100%, 45%))';
  }

  const healthBarStyle = {
    width: `${healthPercentage}%`,
    background: healthColor,
  };

  return (
    <div className="HealthBar">
      <p>HP</p>
      <div className="health">
        <div className="currentHealth" style={healthBarStyle} />
      </div>
    </div>
  );
};

export default HealthBar;
