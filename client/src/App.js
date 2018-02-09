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
  componentWillMount(){
  }
  render() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component ={Login}/>
          <Route exact path="/" render={() => <TrailsList trails={ this.props.trails } fetchTrails={ this.props.actions.fetchTrails } addTrail={ this.props.actions.addTrail } deleteTrail={ this.props.actions.deleteTrail }/>} />
          <Route exact path="/trails/:id" render={({match, history}) => <TrailsDetails match={ match } history={ history } trails={ this.props.trail }/>} />
          <Route exact path="/trails/edit/:id" render={({match, history}) => <TrailsUpdate match={ match } history={ history } trails={ this.props.trail } updateTrail={ this.props.actions.updateTrail } />} />
        </Switch>
      </Router>
    )
  };
};

const mapStateToProps = state => ({
  trails: state.trail.trails
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(trailActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
