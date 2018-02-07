import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class TrailsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trails: [],
        name: "",
        length: "",
        elevation: "",
        description: "",
        challenge: ""
      
    };
    this.handleChange = this.handleChange.bind(this);
    }
  componentWillMount() {
    let thisTrail = this.props.trails.find(trail => {
      return trail.id === parseInt(this.props.match.params.id)})
    this.setState(
      thisTrail
    )
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const newTrail = {
      id: this.state.id,
      name: this.state.name,
      length: this.state.length, 
      elevation: this.state.elevation,
      description: this.state.description,
      challenge: this.state.challenge
    }
    this.props.updateTrail(parseInt(this.props.match.params.id), newTrail)
    this.props.history.push("/")
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Update Trail Details</h1>
        </header>
        <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Trail Name: 
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          </label>
          <label>
            Length: 
            <input type="text" name="length" value={this.state.length} onChange={this.handleChange}/><br/>
          </label>
          <label>
            Elevation: 
            <input type="text" name="elevation" value={this.state.elevation} onChange={this.handleChange}/><br/>
          </label>
          <label>
            Description: 
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br/>
          </label>
          <label>
            Challenge: 
            <input type="text" name="challenge" value={this.state.challenge} onChange={this.handleChange}/><br/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
  
      </div>
    );
  }
}

export default TrailsUpdate;
