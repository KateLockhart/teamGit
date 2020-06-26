import React, {Component} from 'react';
import './App.css';
import {render} from 'react-dom';
import earthPic from './Assets/earth.png';
    
import ZomatoDisplay from './Components/zomatodisplay/ZomatoDisplay';
import OpenWeather from './components/OpenWeather/OpenWeather';
import NASA from './Components/NASA/NASA';
    
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class='navbar'>
          <img id='earth' src={earthPic} />
          <h2 id='title'>Here you are, but what to do?</h2>
        </div>
        <ZomatoDisplay />
        <OpenWeather />
        <NASA />
        <div class='footer'>
          <p class='footNote'>
            While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy.
            Copyright 2020 by 404 Team Not Found Co. All Rights Reserved.
          </p> 
          <p class='footNote'>Powered by Legacy React, Sass, and Web Dev Student Tears.</p>
        </div>
      </div>
    );
  }
}

//render(<App />, document.getElementById("root"));

export default App;
