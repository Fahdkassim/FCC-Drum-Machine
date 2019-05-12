import "./App.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
const data = [
  {
    id: "Snare",
    letter: "Q",
    src: "https://www.myinstants.com/media/sounds/snare.mp3"
  },
  {
    id: "Bass 1",
    letter: "W",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3"
  },
  {
    id: "Bongo",
    letter: "E",
    src: "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"
  },
  {
    id: "Tom Tom",
    letter: "A",
    src: "http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"
  },
  {
    id: "Bass 3",
    letter: "S",
    src: "http://billor.chsh.chc.edu.tw/sound/bass4.wav"
  },
  {
    id: "Shotgun",
    letter: "D",
    src: "http://david.guerrero.free.fr/Effects/ShotgunReload.wav"
  },
  {
    id: "High hat",
    letter: "Z",
    src: "http://www.denhaku.com/r_box/tr707/closed.wav"
  },
  {
    id: "Drum hit",
    letter: "X",
    src: "http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"
  },
  {
    id: "Laser",
    letter: "C",
    src: "http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav"
  }
];

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };
  render() {
    return (
      <Button
        className=" rounded-pill drum-pad btn-info m-2"
        id={this.props.id}
        onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
        />
      </Button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { display: "" };
  }
  handleDisplay = display => {
    this.setState({ display });
  };

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        {data.map(d => (
          <DrumPad
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
        ))}
      </div>
    );
  }
}

export default App;
