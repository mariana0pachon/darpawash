import React, { Component } from 'react';
import icon1 from '../icons/icon-1.svg';
import icon2 from '../icons/icon-2.svg';
import icon3 from '../icons/icon-3.svg';
import icon4 from '../icons/icon-4.svg';
import icon5 from '../icons/icon-5.svg';
import icon6 from '../icons/icon-6.svg';


class Overview_text extends Component {
  render() {
    return (
      	<div className='overview-text'>
      		<div className='overview-description'>
	      		<b>Warfighters face an increased exposure to </b>various ailments such as Traumatic Brain Injury (TBI) and infectious diseases. Digital biomarkers are smartphone-sensable user behaviors that can reliably indicate the health status, ailment symptoms and condition of the smartphone user. For example, an ailing smartphone user may exhibit reduced daily step counts or stay longer in sedentary activity states during their day.
	      		<br></br><br></br>
	      		Funded by the DARPA Warfighter Analytics using Smartphones for Health (WASH) project, our team is researching and developing machine/deep learning algorithms that synthesize reliable smartphone biomarkers that enable continuous, real-time assessment of TBI and infectious diseases afflicting warfighters by leveraging data unobtrusively captured from smartphone sensors.
      		</div>
      		<div className='overview-icons centering-guide'>
	      		<div className='icon-title'>Our approach includes:</div>
	      		<br></br><br></br>
	      		<div className='icon-row'>
	      			<div className='centering-guide'>
	      				<img src={icon1} className='icon'/>
	      				<p className='icon-description'>Feature engineering of smartphone sensor data</p>
	      			</div>
	      			<div className='centering-guide'>
	      				<img src={icon2} className='icon'/>
	      				<p className='icon-description'>Statistical modeling of personalized behavior typical of a smartphone user</p>
	      			</div>
	      			<div className='centering-guide'>
	      				<img src={icon3} className='icon'/>
	      				<p className='icon-description'>Detection of higher-order activity states from low-level signals</p>
	      			</div>
	      		</div>
	      		<div className='icon-row'>
	      			<div className='centering-guide'>
	      				<img src={icon4} className='icon'/>
	      				<p className='icon-description'>Machine/Deep learning of robust outliers or deviations from normal, healthy behavior</p>
	      			</div>
	      			<div className='centering-guide'>
	      				<img src={icon5} className='icon'/>
	      				<p className='icon-description'>Inference of classes of diseases affecting a smartphone user</p>
	      			</div>
	      			<div className='centering-guide'>
	      				<img src={icon6} className='icon'/>
	      				<p className='icon-description'>Empirical study and evaluation of robustness of biomarker detectors</p>
	      			</div>
	      		</div>
      		</div>
      	</div>
    );
  }
}

export default Overview_text;
