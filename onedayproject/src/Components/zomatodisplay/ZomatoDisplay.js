import React, {Component} from 'react';
import './Zomato.css';


class ZomatoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat : null, 
            lon : null,
            key: "c825c5b61f911dd1a282eef5b7f429b0",
            restaurantsList: []
        }
    }

componentDidMount() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: (position.coords.latitude),
                lon: (position.coords.longitude)
            })
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            
            fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.lat}&lon=${this.state.lon}&apikey=${this.state.key}`)
            .then((value) => {
                return value.json();
            }).then(json => {
                console.log(json.nearby_restaurants);
                restaurants(json.nearby_restaurants);
            });
        })


        let restaurants = (jsonData) => {
            let i = 0;
            while(i < jsonData.length) {
                const list = this.state.restaurantsList.slice();
                list[i] = jsonData[i].restaurant.name;
                this.setState({
                    restaurantsList: list
                })
                i++;
                }
            }   
        }
    }     
    render () {
        return(
            <div class='container'>
             <div class='restdisplay'>
                <h2 id='resthead'>Local Restaurants: </h2>
                <h4 id='restlist'>{this.state.restaurantsList}</h4>
             </div>
             </div>
            )
    }
}

export default ZomatoDisplay;
