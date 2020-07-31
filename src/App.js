import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import {Home} from './Home';
//import {About} from './About';
//import {Contact} from './Contact';
//import {Card} from './components/Card'
import Dashboard from './Dashboard';
//import {NoMatch} from './NoMatch';
//import {Layout}  from './components/Layout';
//import {NavigationBar} from './components/NavigationBar';
//import SideBar from './components/Sidebar';
//import {Jumbotron} from './components/Jumbotron';


class App extends Component {
  render(){
  return (
    
    <Dashboard />
  );
}
}

export default App;
