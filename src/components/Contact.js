import React, { Component } from 'react';
import email from '../icons/email.svg';

class Contact extends Component {

  render() {
    return (
      <div>
		<div className='parallax section-title contact-title'>
	    	Contact
	    </div>	
	    <div className='contact'>
	    	<div>
	    		<div>WPI WASH Project Team</div>
	    		<a href="mailto:wash@wpi.edu"><img className='email-icon small-icon' src={email}/></a>
	    	</div>
	    </div>
	    <div className='contact'>
	        <div>
	        	<div>Prof Emmanuel Agu</div>
	    		<a href="mailto:emmanuel@wpi.edu"><img className='email-icon small-icon' src={email}/></a>
	    	</div>
		    <div>
		    	<div>Prof Elke A Rundensteiner</div>
				<a href="mailto:rundenst@wpi.edu"><img className='email-icon small-icon' src={email}/></a>
			</div>
		</div>

      </div>
    );
  }
}

export default Contact;
