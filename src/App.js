import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => console.log('test')}>TONE</button>
      </div>
    );
  }
}

export default App;
