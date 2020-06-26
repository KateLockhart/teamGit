import React, {Component} from 'react';
import './App.css';
import {render} from 'react-dom';
import ZomatoDisplay from './Components/zomatodisplay/ZomatoDisplay';
import OpenWeather from './components/OpenWeather/OpenWeather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
        <ZomatoDisplay />
        <OpenWeather />
      </div>
    );
  }
}

//render(<App />, document.getElementById("root"));

export default App;
