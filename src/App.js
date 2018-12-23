import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Homepage from './components/Homepage.js';

class App extends Component {

  constructor(){
    super();
    this.state={
      current_page: 'home',
    }
  }

  // sets the current_page state to the page that was clicked in the menu
  menuClick=(param)=>{
    this.setState({current_page: param});
    console.log(this.state.current_page);
  }

  render() {
    return (
      <div className="App">
        <Menu menuClick={this.menuClick}/>
        <Homepage/>
      </div>
    );
  }
}

export default App;
