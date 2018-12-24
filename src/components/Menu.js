import React, { Component } from 'react';

class Menu extends Component {

	constructor(props){
		super(props);
	}

	menuClick(param){
		this.props.menuClick(param);
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
		      	<a id='overview' onClick={()=>this.menuClick('overview')}>Overview</a>
		      	<a id='people' onClick={()=>this.menuClick('people')}>People</a>
		      	<div>Logo</div>
		      	<a id='news' onClick={()=>this.menuClick('news')}>News</a>
		    	<a id='contact' onClick={()=>this.menuClick('contact')}>Contact</a>
		    </div>
    	);
  	}
}

export default Menu;
