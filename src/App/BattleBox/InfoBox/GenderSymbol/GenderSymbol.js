import React from 'react';
import './GenderSymbol.css';

const GenderSymbol = function GenderSymbol(props) {
  const { gender } = props;
  let genderJSX;
  if (gender === 'm') {
    genderJSX = (
      <span className="GenderSymbol GenderSymbol-male">♂</span>
    );
  } else if (gender === 'f') {
    genderJSX = (
      <span className="GenderSymbol GenderSymbol-female">♀</span>
    );
  } else {
    genderJSX = null;
  }
  return (
    genderJSX
  );
};

export default GenderSymbol;
