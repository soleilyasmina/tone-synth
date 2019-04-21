import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      synth: null
    }
  }
  start = () => {
    Tone.start();
    let synth = new Tone.PolySynth({
	"oscillator" : {
		"type" : "pwm",
		"modulationFrequency" : 0.2
	},
	"envelope" : {
		"attack" : 0.02,
		"decay" : 0.1,
		"sustain" : 0.2,
		"release" : 0.1,
	}
    }).toMaster();
    synth.triggerAttackRelease("D3", "8n");
    
    this.setState({synth});
  }
  render = () => {
    return (
      <div className="App">
        <button onClick={this.start}>TONE</button>
      </div>
    );
  }
}

export default App;
