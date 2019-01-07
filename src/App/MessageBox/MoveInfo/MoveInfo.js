import React from 'react';
import './MoveInfo.css';

const MoveInfo = function MoveInfo(props) {
  const { move } = props;
  return (
    <div id="MoveInfo">
      <p>PP</p>
      <p>{`${move.currentPowerPoints}/${move.powerPoints}`}</p>
      <p>{`TYPE/${String(move.type).toUpperCase()}`}</p>
    </div>
  );
};

export default MoveInfo;
