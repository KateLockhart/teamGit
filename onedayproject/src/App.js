import React, { Component } from 'react';
import './App.css';
// import { render } from "react-dom";
import OpenWeather from './Components/OpenWeather/OpenWeather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
}

  render() {
    return (
      <div>
        <OpenWeather />
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));

export default App;