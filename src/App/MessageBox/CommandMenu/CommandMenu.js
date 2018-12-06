import React from 'react';
import './CommandMenu.css';

class CommandMenu extends React.Component {
  render() {
    return (
      <div id="CommandMenu">
        <p onClick={this.props.handleClickAttack}>Attack</p>
        <p onClick={() => { }}>Bag</p>
        <p onClick={() => { }}>Pokemon</p>
        <p onClick={() => { }}>Run</p>
      </div>
    );
  }
}

export default CommandMenu;