import React from 'react';
import './MoveInfo.css';

class MoveInfo extends React.Component {
  render() {
    return (
      <div id='MoveInfo'>
        <p>PP</p>
        <p>{this.props.move.currentPowerPoints}/{this.props.move.powerPoints}</p>
        <p>TYPE/{String(this.props.move.type).toUpperCase()}</p>
      </div>
    );
  }
}

export default MoveInfo;