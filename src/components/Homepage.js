import React, { Component } from 'react';

class Homepage extends Component {

  constructor(props){
    super(props);
    this.state={
      quote: 1,
    }
  }

  changeQuote_Click(number){
    this.setState({quote: number});
    document.getElementById('home-circle-' + number).className = ' current-slider ';
    
    switch(number){
      case 1:
        document.getElementById('home-circle-2').className = ' slider-circle '
        document.getElementById('home-circle-3').className = ' slider-circle '
        document.getElementById('home-circle-4').className = ' slider-circle '
        break;
      case 2:
        document.getElementById('home-circle-1').className = ' slider-circle '
        document.getElementById('home-circle-3').className = ' slider-circle '
        document.getElementById('home-circle-4').className = ' slider-circle '
        break;
      case 3:
        document.getElementById('home-circle-1').className = ' slider-circle '
        document.getElementById('home-circle-2').className = ' slider-circle '
        document.getElementById('home-circle-4').className = ' slider-circle '
        break;
      case 4:
        document.getElementById('home-circle-1').className = ' slider-circle '
        document.getElementById('home-circle-2').className = ' slider-circle '
        document.getElementById('home-circle-3').className = ' slider-circle '
        break;
      default:
        break;
    }
  }

  scrollDownClick(){
    this.props.scrollDownClick();
  }

  render() {

    return (
      <div className='homepage'>
        <div className='home-title'>Warfighter Analytics for Smartphone Healthcare</div>
        <div className='centering-guide'>
          <div className='home-divider'></div>
        </div>
        <div className='home-subtitle'>Worcester Polytechnic Institute</div>
          {
            (this.state.quote === 1)
            ? <div className='home-quote'>
                "The technology we are creating through WASH, which will discover predictive patterns in massive data sets in real time, is bound to be transformative." 
                <br></br><br></br>
                <i>-Prof. Elke Rundensteiner</i>
              </div>
            : (this.state.quote === 2)
              ? <div className='home-quote'>
                  "We can look for symptoms like slurred speech or reduced communication and social interaction that may indicate TBI, or coughing and fatigued movement typical of some infectious diseases, and we can trigger help earlier.”
                  <br></br><br></br>
                  <i>-Prof. Emmanuel Agu</i>
                </div>
              : (this.state.quote===3)
                ? <div className='home-quote'>"Three of four notable quotes"</div>
                : (this.state.quote === 4)
                  ? <div className='home-quote'>"Four of four notable quotes"</div>
                  : null
          }
        <div className='centering-guide'>
          <div id='home-circle-1' onClick={()=>this.changeQuote_Click(1)} className=' current-slider '></div>
          <div id='home-circle-2' onClick={()=>this.changeQuote_Click(2)} className=' slider-circle '></div>
          <div id='home-circle-3' onClick={()=>this.changeQuote_Click(3)} className=' slider-circle '></div>
          <div id='home-circle-4' onClick={()=>this.changeQuote_Click(4)} className=' slider-circle '></div>
        </div>

        <div className='centering-guide'>
          <div onClick={()=>this.scrollDownClick()} className='down-arrow'></div>
        </div>

      </div>
    );
  }
}

export default Homepage;