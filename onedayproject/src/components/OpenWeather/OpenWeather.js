import React, { Component } from "react";
import './OpenWeather.scss';

export default class OpenWeather2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      temp: null,
    };
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${process.env.REACT_APP_WEATHER_KEY}`
        )
          .then((value) => {
            return value.json();
          })
          .then((json) => {
            getInfo(json);
          })
          .catch(console.log);
      });
    }
    let getInfo = (json) => {
      let myTemp = json.main.temp;
      let tempVa = ((myTemp - 273.15) * 9) / 5 + 32;
      tempVa = Math.round(tempVa);
      let tempC = (tempVa - 32) * (5 / 9);
      tempC = Math.round(tempC);
      let currentTemp = json.main.temp;
      currentTemp = Math.round(currentTemp);
      this.setState({
        currentTemperature: currentTemp,
        tempFa: tempVa,
        tempCe: tempC,
        weatherCond: json.weather[0].main,
      });
    };
  }
  currentTemperature = (e) => {
    return this.state.Temperature ? (
      <h1>
        Temperature Fahrenheit
        <p>{this.state.tempFa}°</p>
      </h1>
    ) : (
      <h1>
        Temperature Celsius
        <p>{this.state.tempCe}°</p>
      </h1>
    );
  };
  Toggle = () => {
    this.setState({ Temperature: !this.state.Temperature });
  };
  render() {
    return (
      <div className='OpenWeather'>
        <div className='weatherDiv'>
        <h1>Weather Condition</h1>
        <h3>{this.state.weatherCond}</h3>
          {this.currentTemperature()}
          <button onClick={this.Toggle}>Fahrenheit/Celsius</button>
        </div>
      </div>
    );
  }
}
