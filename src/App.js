import React, { Component } from 'react';
import Sidebarwithmap from"./components/Sidebarwithmap.js";

import './App.css';

/*Passes all places into the map as props.*/

class App extends Component {

  state ={
    //Add more places here if required.
    places:[
           {title: 'Scenic World', location: {lat: -33.7288012, lng: 150.30115490000003}},
           {title: 'Katoomba Falls', location: {lat: -33.7275452, lng: 150.30468470000005}},
           {title: 'Three Sisters', location: {lat: -33.731733, lng: 150.3129953}},
           {title: 'Cliff View Lookout', location: {lat: -33.72633309999999, lng: 150.30619219999994}},
           {title: 'Eagle Hawk Lookout', location: {lat: -33.731765, lng: 150.29946169999994}}
          ]
  }

  render(){
    return(<Sidebarwithmap activeMarkers= {this.state.places}/>)
   }

}

export default App;

