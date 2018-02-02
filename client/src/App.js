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
import Login from './Login';
import TrailsList from './TrailsList';
import TrailsDetails from './TrailsDetails';
import TrailsUpdate from './TrailsUpdate';
import * as trailActions from './actions/trail';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class App extends Component {
  
  render() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component ={Login}/>
          <Route exact path="/" render={() => <TrailsList trails={ this.props.trail } action={ this.props.actions.addTrail }/>} />
          <Route exact path="/trails/:id" component={TrailsDetails}/>
          <Route exact path="/trails/edit/:id" component={TrailsUpdate}/>
        </Switch>
      </Router>
    )
  };
};

const mapStateToProps = state => ({
  trail: state.trail
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(trailActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
