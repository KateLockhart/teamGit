import React, { Component } from 'react';
import './NASA.css';

export default class NASA extends Component {
    constructor(props){
        super(props);
        this.state = {
            lat: null,
            long: null,
            NASAurl: 'https://api.nasa.gov/planetary/earth/assets',
            key: 'evU2fnvvCNuGqEmm8nZ2aDzEFl6ATasCjVFujLvY',
            img: ''
        }
    }

    componentWillMount() {
        console.log("NASA API is about to mount.");
    }

    componentDidMount = (props) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                long: (position.coords.longitude),
                lat: (position.coords.latitude)
            })

            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            console.log("NASA component sucessfully mounted.");

            fetch(`${this.state.NASAurl}?lon=${this.state.long}&lat=${this.state.lat}&dim=0.05&api_key=${this.state.key}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    img: json.url
                })
                console.log(this.state.img);
            })
          })
        }
      }
    
    render(){
        return(
            <div id='nasaDiv'>
                <h2 id='nasah2'>Where in the world are you? Let's take a look from above:</h2>
                <br />
                <img id='apiReturn' src={this.state.img} alt='NASA API photo'/>
                <br />
                <hr />
            </div>
        )
    }
}