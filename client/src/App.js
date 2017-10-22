import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TrailsList from './TrailsList';
import TrailsDetails from './TrailsDetails';

class App extends Component {
  
  render() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TrailsList}/>
          <Route path="/trails/:id" component={TrailsDetails}/>
        </Switch>
      </Router>
    )
  };
};
export default App;
