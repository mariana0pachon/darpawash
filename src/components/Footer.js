import React, { Component } from 'react';
import placeholder from '../people/placeholder.jpg'
import wpilogo from '../logos/wpi.png';
import darpalogo from '../logos/darpa.png';

class Footer extends Component {

  render() {
    return (
	<div className='footer'>
      <img style={{width: '5vw'}} src={wpilogo}/>
    	<div>
    		Worcester Polytechnic Institute has been selected as a prime contractor 
    		under the Warfighter Analytics using Smartphones for 
    		Health (WASH) program funded by <a style={{color: 'white'}}href='https://www.darpa.mil/program/warfighter-analytics-using-smartphones-for-health' target='_blank'>DARPA</a> 
      </div>
      <img style={{width: '10vw'}}src={darpalogo}/>
	</div>
    );
  }
}

export default Footer;
