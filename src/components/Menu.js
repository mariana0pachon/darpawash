import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

class Menu extends Component {

	constructor(props){
		super(props);
		let that_ = this;
		window.addEventListener('scroll', function(){
			let currenty = window.pageYOffset;
			if (currenty===0)
				that_.currentMenuStyle('home');
			else if (currenty>4800)
				that_.currentMenuStyle('contact');
			else if(currenty>3820)
				that_.currentMenuStyle('news');
			else if(currenty>2830)
				that_.currentMenuStyle('people');
			else if (currenty>910)
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
		}
		else
			document.getElementById(param).className = ' current-menu ';
		switch(param){
			case 'overview':
				document.getElementById('people').className -= ' current-menu ';
				document.getElementById('news').className -= ' current-menu ';
				document.getElementById('contact').className -= ' current-menu ';
				break;
			case 'people':
				document.getElementById('overview').className -= ' current-menu ';
				document.getElementById('news').className -= ' current-menu ';
				document.getElementById('contact').className -= ' current-menu ';
				break;
			case 'news':
				document.getElementById('overview').className -= ' current-menu ';
				document.getElementById('people').className -= ' current-menu ';
				document.getElementById('contact').className -= ' current-menu ';
				break;
			case 'contact':
				document.getElementById('overview').className -= ' current-menu ';
				document.getElementById('news').className -= ' current-menu ';
				document.getElementById('people').className -= ' current-menu ';
				break;
			default:
				break;
		}
	}

  	render() {
    	return (
      		<div className='menu'>
		      	<div id='overview' onClick={()=>this.menuClick('overview')}>Overview</div>
		      	<div id='people' onClick={()=>this.menuClick('people')}>People</div>
		      	<div id='home' onClick={()=>this.menuClick('home')}>Logo</div>
		      	<div id='news' onClick={()=>this.menuClick('news')}>News</div>
		    	<div id='contact' onClick={()=>this.menuClick('contact')}>Contact</div>
		    </div>
    	);
  	}
}

export default Menu;