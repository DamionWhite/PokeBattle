import React from 'react';
import './CommandMenu.css';

const CommandMenu = function CommandMenu(props) {
  const { handleClickAttack } = props;
  return (
    <div id="CommandMenu">
      <p onClick={handleClickAttack}>Attack</p>
      <p onClick={() => { }}>Bag</p>
      <p onClick={() => { }}>Pokemon</p>
      <p onClick={() => { }}>Run</p>
    </div>
  );
};

export default CommandMenu;
