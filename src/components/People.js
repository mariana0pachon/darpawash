import React, { Component } from 'react';
import Placeholder from '../people/placeholder.jpg'
import Agu from '../people/emmanuelagu.png';
import Rundensteiner from '../people/elkerundensteiner.jpg';
import Alajaji from '../people/alajaji.png';
import Buquicchio from '../people/buquicchio.jpeg';
import Chandrasekaran from '../people/chandrasekaran.jpg';
import Ellison from '../people/ellison.jpg';
import Gerych from '../people/gerych.png';
import Johnson from '../people/johnson.jpg';
import Mansoor from '../people/mansoor.jpg';
import Muehlschegel from '../people/muehlschegel.jpg';
import Swearer from '../people/swearer.svg';


class People extends Component {

  render() {
    return (
        <div className='people centering-guide'>
        	<div className='parallax section-title people-section-title'>
        		People
        	</div>	
        	<div className='people-title'>Faculty</div>
        	<div className='people-row'>
	        	<div className='person-block'>
	        		<img src={Agu} className='people-image'/>
	        		<div>Prof Emmanuel Agu (PI)</div>
	        	</div>
	        	<div className='person-block'>
	        		<img src={Rundensteiner} className='people-image'/>
	        		<div>Prof Elke A Rundensteiner</div>
	        	</div>
	        </div>

        	<div className='people-title'>Students</div>
        	<div className='people-row'>
		    	<div className='person-block'>
		    		<img src={Alajaji} className='people-image'/>
		    		<div className=''>Abdulaziz Alajaji<br></br>PhD, Data Science</div>
		    	</div>
		    	<div className='person-block'>
		    		<img src={Gerych} className='people-image'/>
		    		<div className=''>Walter Gerych<br></br>PhD, Data Science</div>
		    	</div>
		    	<div className='person-block'>
		    		<img src={Mansoor} className='people-image'/>
		    		<div className=''>Hamid Mansoor<br></br>PhD, Computer Science</div>
		    	</div>   
		    	<div className='person-block'>
		    		<img src={Buquicchio} className='people-image'/>
		    		<div className=''>Luke Buquicchio<br></br>PhD, Data Science</div>
		    	</div>   
		    	<div className='person-block'>
		    		<img src={Chandrasekaran} className='people-image'/>
		    		<div className=''>Kavan Chandrasekaran<br></br>PhD, Data Science</div>
		    	</div>
		    </div>   

	    	<div className='people-title'>Medical Collaborators</div>
	    	<div className='people-row'>
		    	<div className='person-block'>
		    		<img src={Ellison} className='people-image'/>
		    		<div className=''>
		    			Dr Richard Ellison<br></br>Infectious Diseases<br></br>UMass Medical School
					</div>
		    	</div>
		    	<div className='person-block'>
		    		<img src={Johnson} className='people-image'/>
		    		<div className=''>Dr Mark Johnson<br></br>Head of Neurology Dept<br></br>UMass Medical School</div>
		    	</div>
		    	<div className='person-block'>
		    		<img src={Muehlschegel} className='people-image'/>
		    		<div className=''>Dr Suzanne Muehlschegel<br></br>Dept of Neurology<br></br>UMass Medical School</div>
		    	</div>   
		    	<div className='person-block'>
		    		<img src={Swearer} className='people-image'/>
		    		<div className=''>Joan Swearer, PhD<br></br>Professor of Neuropsychology<br></br>UMass Medical School</div>
		    	</div>   
		    </div>        	
        </div>
    );
  }
}

export default People;
