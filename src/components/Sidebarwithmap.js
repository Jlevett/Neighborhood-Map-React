import React, { Component } from 'react';
import './css/Sidebarwithmap.css';
import Mapcontainer from"./Mapcontainer.js";
import Hamburger from"./Hamburger.js";

class Sidebarwithmap extends Component {

 state = {
 	sideNavStyle:'0',
 	hamburgerClassName:'hamburger hamburger--minus js-hamburger',
 	placesToDisplay:[],
 	query:'',
 	listItemSelected:''
 }


	hamburgerToggle = ()=>{
		 if(this.state.hamburgerClassName==='hamburger hamburger--minus js-hamburger'){
			this.setState({sideNavStyle:'270px'})
			this.setState({hamburgerClassName:"hamburger hamburger--minus is-active"})
		 } else {
			this.setState({sideNavStyle:'0'})
			this.setState({hamburgerClassName:'hamburger hamburger--minus js-hamburger'})
		 }
	}

	componentWillMount(){
		this.setState({placesToDisplay:this.props.activeMarkers})
	}

	handleQueryEvent = (query)=>{
		this.setState({query:query, listItemSelected:''})
		this.search(query);
	}

	search =(thisQuery)=>{
		if(thisQuery.length===0)
			this.setState({placesToDisplay:this.props.activeMarkers});
		else
			this.setState({placesToDisplay:
				this.props.activeMarkers.filter(p=>p.title.toLowerCase().includes(thisQuery.trim().toLowerCase()))})
	}



	 render(){
		return(
			<div>
				<div id={"mySidenav"} className={"sidenav"} style={{width:this.state.sideNavStyle}}>

			  		<input
			  			className='searchbar'
			  			type='text'
			  			placeholder='Search For...'
			  			onChange = {event => this.handleQueryEvent(event.target.value)}
			  			value = {this.state.query}
			  		 />

			  		{this.state.placesToDisplay.map((place, index)=>(
			  			<div
			  			className='placediv'
			  			key={index}
			  			onClick={()=> this.setState({listItemSelected: place.title})}
			  			style={{}}
			  			>
			  				<a>{place.title}</a>
			  			</div>
			  		))}

				</div>

				<div id={"main"} style={{marginLeft:'0'}}>
					<div className={"top-section"}>
				 		 <Hamburger
				 		 	hamburgerClassName={this.state.hamburgerClassName}
				 		 	hamburgerToggle = {this.hamburgerToggle}
				 		 />
						<h1 className={'mainheading'}>PLACES</h1>
					</div>

			 		<div
			 			className={'map-area'}
			 			onClick={()=>{this.setState({sideNavStyle:'0', hamburgerClassName:'hamburger hamburger--minus js-hamburger'})}}
			 			onTouchMove={()=>{this.setState({sideNavStyle:'0', hamburgerClassName:'hamburger hamburger--minus js-hamburger'})}}
			 		>
 						<Mapcontainer
 						  placesToDisplay={this.state.placesToDisplay}
 						  placeSelected={this.state.listItemSelected}
 						  selectPlace= {(place)=>{this.setState({listItemSelected: place})}}
 						  />
			 		</div>
				</div>

			</div>

		)

	}
}

export default Sidebarwithmap;
