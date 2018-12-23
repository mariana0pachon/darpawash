import React, { Component } from 'react';

class Menu extends Component {

	constructor(props){
		super(props);
	}

	menuClick(param){
		this.props.menuClick(param);
		document.getElementById(param).className = ' current-menu ';
		if(param==='overview'){
			document.getElementById('people').className -= ' current-menu ';
			document.getElementById('news').className -= ' current-menu ';
			document.getElementById('contact').className -= ' current-menu ';
		}
		else if(param==='people'){
			document.getElementById('overview').className -= ' current-menu ';
			document.getElementById('news').className -= ' current-menu ';
			document.getElementById('contact').className -= ' current-menu ';
		}
		else if(param==='news'){
			document.getElementById('overview').className -= ' current-menu ';
			document.getElementById('people').className -= ' current-menu ';
			document.getElementById('contact').className -= ' current-menu ';
		}
		else if(param==='contact'){
			document.getElementById('overview').className -= ' current-menu ';
			document.getElementById('news').className -= ' current-menu ';
			document.getElementById('people').className -= ' current-menu ';
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
