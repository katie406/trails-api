import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class TrailsList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   trails: [
    //     {
    //     name: "",
    //     length: "",
    //     elevation: "",
    //     description: "",
    //     challenge: ""
    //     }
    //   ] 
      
    // };
    this.handleChange = this.handleChange.bind(this);
    }
  componentWillMount() {
    this.props.fetchTrails()
    // axios.get('/api/trails')
    //   .then((response) => {
    //     this.setState({
    //       trails: response.data
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  delete(trailId){
    // const deleteTrail = this.props.trails;
    //   newState.splice(newState.indexOf(trail), 1);
    //   axios.delete('/api/trails/' + trail)
    //     .then((res) => {
    //       this.setState({trails: newState})
    // }); 
    
    this.props.deleteTrail(trailId);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const newTrail = {
      name: this.state.name,
      length: this.state.length, 
      elevation: this.state.elevation,
      description: this.state.description,
      challenge: this.state.challenge
    }

    this.props.addTrail(newTrail);
    // axios.post('/api/trails/', newTrail) 
    //     .then((res) => {
    //       var newTrails = this.state.trails;
    //       newTrails.push(res.data);
    //       this.setState({trails: newTrails})
    // }); 
  }

  render() {
    console.log(this.props.trails)

    const trailItems = this.props.trails.map((trail)=>{
      return <li key={trail.id}>
        <Link to={"/trails/" + trail.id}>{trail.name}</Link>&nbsp;
        <button onClick={this.delete.bind(this, trail.id)}>Delete</button>
      </li> 
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          { trailItems }
        </ul>
        <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Trail Name: 
            <input type="text" name="name" onChange={this.handleChange}/><br/>
          </label>
          <label>
            Length: 
            <input type="text" name="length" onChange={this.handleChange}/><br/>
          </label>
          <label>
            Elevation: 
            <input type="text" name="elevation" onChange={this.handleChange}/><br/>
          </label>
          <label>
            Description: 
            <input type="text" name="description" onChange={this.handleChange}/><br/>
          </label>
          <label>
            Challenge: 
            <input type="text" name="challenge" onChange={this.handleChange}/><br/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
  
      </div>
    );
  }
}

export default TrailsList;
