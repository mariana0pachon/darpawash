import React, { Component } from 'react';
import diagram1 from '../diagrams/diagram1.jpg';
import diagram2 from '../diagrams/diagram2.jpg';
import diagram3 from '../diagrams/diagram3.jpg';


class Overview_diagram extends Component {

	constructor(){
		super();
		this.state={
			current_diagram: 1,
		}
	}	

	changeDiagram_Click(number){
	  this.setState({current_diagram: number});
	  document.getElementById('diagram-circle-' + number).className = ' current-slider ';
	  switch(number){
	  	case 1:
	  		document.getElementById('diagram-circle-2').className = ' slider-circle '
	  		document.getElementById('diagram-circle-3').className = ' slider-circle '
	  		break;
	  	case 2: 
	  		document.getElementById('diagram-circle-1').className = ' slider-circle '
	  		document.getElementById('diagram-circle-3').className = ' slider-circle '
	  		break;
	  	case 3:
	  		document.getElementById('diagram-circle-1').className = ' slider-circle '
	  		document.getElementById('diagram-circle-2').className = ' slider-circle '
	  		break;
	  	default:
	  		break;
	  }
	}

	nextDiagram_Click(){
		let i=this.state.current_diagram;
		if (i===3)
			i=0;
		this.setState({current_diagram: ++i});
		this.changeDiagram_Click(i);		
	}

	previousDiagram_Click(){
		let i=this.state.current_diagram;
		if (i===1)
			i=4;
		this.setState({current_diagram: --i});
		this.changeDiagram_Click(i);		
	}

	render() {
	return (
	  	<div className='diagram-layout'>
	  		<div className='diagram-slider-top'>
	  			<div  onClick={()=>this.previousDiagram_Click()} id='diagram-back-arrow'className='back-arrow'></div>
	  			{
	  				(this.state.current_diagram===1)
	  				? <img src={diagram1} className='diagram-content'/>
	  				: (this.state.current_diagram===2)
	  					?<img src={diagram2} className='diagram-content'/>
	  					: (this.state.current_diagram===3)
	  						?<img src={diagram3} className='diagram-content'/>
	  						:null
	  			}
	  			<div onClick={()=>this.nextDiagram_Click()} id='diagram-front-arrow'className='front-arrow'></div>
	  		</div>
	  		<div className='centering-guide'>
	  		  <div id='diagram-circle-1' onClick={()=>this.changeDiagram_Click(1)} className=' current-slider '></div>
	  		  <div id='diagram-circle-2' onClick={()=>this.changeDiagram_Click(2)} className=' slider-circle '></div>
	  		  <div id='diagram-circle-3' onClick={()=>this.changeDiagram_Click(3)} className=' slider-circle '></div>
	  		</div>
	  	</div>

	);
	}
}

export default Overview_diagram;
