/*Hamburger Menu Component*/
import React, { Component } from 'react';
import './css/Hamburger.css';


class Hamburger extends Component {

	render(){
		return(
			<div id={"burgerContainer"}>
	          <button className={this.props.hamburgerClassName} type={"button"}>
	            <span className={"hamburger-box"}  onClick={this.props.hamburgerToggle}>
	              <span className={"hamburger-inner"}> </span>
	            </span>
	          </button>
	        </div>
		);
	}
}

export default Hamburger;
