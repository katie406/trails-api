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
import TrailsUpdate from './TrailsUpdate';

class App extends Component {
  
  render() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TrailsList}/>
          <Route exact path="/trails/:id" component={TrailsDetails}/>
          <Route exact path="/trails/edit/:id" component={TrailsUpdate}/>
        </Switch>
      </Router>
    )
  };
};
export default App;
