import React from 'react';
import './GenderSymbol.css';

class GenderSymbol extends React.Component {


  render() {
    let gender;
    if (this.props.gender === 'm') {
      gender = (
        <span className='GenderSymbol GenderSymbol-male'>♂</span>
      )
    }
    else if (this.props.gender === 'f') {
      gender = (
        <span className='GenderSymbol GenderSymbol-female'>♀</span>
      )
    }
    else {
      gender = null;
    }
    return (
      gender
    );
  }
}

export default GenderSymbol;