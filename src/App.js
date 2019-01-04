import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Homepage from './components/Homepage.js';
import Overview from './components/Overview.js';
import People from './components/People.js';
import Results from './components/Results.js';
import News from './components/News.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

import scrollToComponent from 'react-scroll-to-component';

class App extends Component {

  constructor(){
    super();
    this.state={
      current_page: 'home',
    };
  }

  componentDidMount(){
    scrollToComponent(this.Homepage, {offset: -100, align: 'top'});
  }

  // sets the current_page state to the page that was clicked in the menu
  menuClick=(param)=>{
    this.setState({current_page: param});
    switch(param){
      case 'home':
        scrollToComponent(this.Homepage, {offset: -100, align: 'top'});
        break;
      case 'overview':
        scrollToComponent(this.Overview, {offset: -100, align: 'top'});
        break;
      case 'people':
        scrollToComponent(this.People, {offset: -100, align: 'top'});
        break;
      case 'results':
        scrollToComponent(this.Results, {offset: -100, align: 'top'});
        break;
      case 'news':
        scrollToComponent(this.News, {offset: -100, align: 'top'});
        break;
      case 'contact':
        scrollToComponent(this.Contact, {offset: -100, align: 'top'});
        break;
      default:
        break;
    }
  }

  scrollDownClick=()=>{
    scrollToComponent(this.Overview, {offset: -100, align: 'top'});
  }

  render() {
    return (
      <div className="App">
        <Menu menuClick={this.menuClick}/>
        <Homepage scrollDownClick={this.scrollDownClick} ref={(section) => {this.Homepage = section;}}/>
        <Overview ref={(section) => {this.Overview = section;}}/> 
        <People ref={(section) => {this.People = section;}}/>
        <Results ref={(section)=>{this.Results=section;}} />
        <News ref={(section) => {this.News = section;}}/> 
        <Contact ref={(section) => {this.Contact = section;}}/> 
        <Footer />
      </div>
    );
  }
}

export default App;
