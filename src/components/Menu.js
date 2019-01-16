import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import wpilogo from '../logos/wpi.png';
import darpalogo from '../logos/darpa.png';

class Menu extends Component {

	constructor(props){
		super(props);
		let that_ = this;
		window.addEventListener('scroll', function(){
			let currenty = window.pageYOffset;
			if (currenty===0)
				that_.currentMenuStyle('home');
			else if (currenty>5465)
				that_.currentMenuStyle('contact');
			else if(currenty>4883)
				that_.currentMenuStyle('news');
			else if(currenty>4322)
				that_.currentMenuStyle('results');
			else if(currenty>2885)
				that_.currentMenuStyle('people');
			else if (currenty>720)
				that_.currentMenuStyle('overview');
		});
	}

	menuClick(param){
		this.props.menuClick(param);
		this.currentMenuStyle(param);
	}

	currentMenuStyle(param){
		if (param === 'home'){
			document.getElementById('people').className -= ' current-menu ';
			document.getElementById('news').className -= ' current-menu ';
			document.getElementById('contact').className -= ' current-menu ';
			document.getElementById('overview').className -= ' current-menu ';
			document.getElementById('results').className -= ' current-menu ';
		}
		else
			document.getElementById(param).className = ' current-menu ';
		switch(param){
			case 'overview':
				document.getElementById('people').className -= ' current-menu ';
				document.getElementById('news').className -= ' current-menu ';
				document.getElementById('contact').className -= ' current-menu ';
				document.getElementById('results').className -= ' current-menu ';
				break;
			case 'people':
				document.getElementById('overview').className -= ' current-menu ';
				document.getElementById('news').className -= ' current-menu ';
				document.getElementById('contact').className -= ' current-menu ';
				document.getElementById('results').className -= ' current-menu ';
				break;
			case 'results':
				document.getElementById('overview').className -= ' current-menu ';
				document.getElementById('people').className -= ' current-menu ';
				document.getElementById('contact').className -= ' current-menu ';
				document.getElementById('news').className -= ' current-menu ';
				break;
			case 'news':
				document.getElementById('overview').className -= ' current-menu ';
				document.getElementById('people').className -= ' current-menu ';
				document.getElementById('contact').className -= ' current-menu ';
				document.getElementById('results').className -= ' current-menu ';
				break;
			case 'contact':
				document.getElementById('overview').className -= ' current-menu ';
				document.getElementById('news').className -= ' current-menu ';
				document.getElementById('people').className -= ' current-menu ';
				document.getElementById('results').className -= ' current-menu ';
				break;
			default:
				break;
		}
	}

  	render() {
    	return (
      		<div className='menu'>
      			<div id='home' onClick={()=>this.menuClick('home')}>
      				<img style={{width: '2vw'}} src={wpilogo}/>
      				<img style={{width: '5vw'}}src={darpalogo}/>
      			</div>
		      	<div id='overview' onClick={()=>this.menuClick('overview')}>Overview</div>
		      	<div id='people' onClick={()=>this.menuClick('people')}>People</div>
		      	<div id='results' onClick={()=>this.menuClick('results')}>Results</div>
		      	<div id='news' onClick={()=>this.menuClick('news')}>News</div>
		    	<div id='contact' onClick={()=>this.menuClick('contact')}>Contact</div>
		    </div>
    	);
  	}
}

export default Menu;