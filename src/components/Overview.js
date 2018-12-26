import React, { Component } from 'react';
import Overview_text from './Overview_text.js';
import Overview_diagram from './Overview_diagram.js';

class Overview extends Component {
  render() {
    return (
      <div className='overview'>
      	<Overview_text />
      	<Overview_diagram />
      </div>
    );
  }
}

export default Overview;