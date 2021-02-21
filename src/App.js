
import { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';


const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
        'currentColor' : RED,
    };
    
    setInterval(() => {
      console.log(this.state.currentColor);
        this.setState({
            'currentColor' : this.getNextColor(this.state.currentColor)
        })
    }, 1000)  
  }

  getNextColor(color) {
    switch (color) {
      case RED:
          return YELLOW;
      case YELLOW:
          return GREEN;
      case GREEN:
          return RED;
      default:
          return RED;
    }
  }

  render() {
    return (
      <div className="App">
        <TrafficLight state={this.state.currentColor}/>
      </div>
    );
  }
}

export default App;
