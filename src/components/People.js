import React, { Component } from 'react';
import Placeholder from '../people/placeholder.jpg'
import Agu from '../people/emmanuelagu.jpg';
import Rundensteiner from '../people/elkerundensteiner.jpg';


class People extends Component {

  render() {
    return (
        <div className='people centering-guide'>
        	
        	<div className='people-title-odd'>Faculty</div>
        	<div className='people-row-odd'>
		    	<div className='centering-guide'>
		    		<img src={Agu} className='people-image'/>
		    		<div className=''>Prof Emmanuel Agu (PI)</div>
		    	</div>
		    	<div className='centering-guide'>
		    		<img src={Rundensteiner} className='people-image'/>
		    		<div className=''>Prof Elke A Rundensteiner</div>
		    	</div>      	
        	</div>

        	<div className='people-title-even'>Students</div>
        	<div className='people-row-even'>
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Abdulaziz Alajaji<br></br>PhD, Data Science</div>
		    	</div>
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Walter Gerych<br></br>PhD, Data Science</div>
		    	</div>
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Hamid Mansoor<br></br>PhD, Computer Science</div>
		    	</div>   
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Luke Buquicchio<br></br>PhD, Data Science</div>
		    	</div>   
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Kavan Chandrasekaran<br></br>PhD, Data Science</div>
		    	</div>         	
        	</div>
        	
        	<div className='people-title-odd'>Medical Collaborators</div>
        	<div className='people-row-odd'>
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>
		    			Dr Richard Ellison<br></br>Infectious Diseases<br></br>UMass Medical School
					</div>
		    	</div>
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Dr Mark Johnson<br></br>Head of Neurology Dept<br></br>UMass Medical School</div>
		    	</div>
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Dr Suzanne Muehlschegel<br></br>Dept of Neurology<br></br>UMass Medical School</div>
		    </div>   
		    	<div className='centering-guide'>
		    		<img src={Placeholder} className='people-image'/>
		    		<div className=''>Joan Swearer, PhD<br></br>Professor of Neuropsychology<br></br>UMass Medical School</div>
		    	</div>           	
        	</div>

        </div>
    );
  }
}

export default People;
