import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class TrailsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      length: "",
      elevation: "",
      description: "",
      challenge: ""
    };
  }

  componentWillMount() {
    let thisTrail = this.props.trails.find(trail => {
      return trail.id === parseInt(this.props.match.params.id)})
    this.setState(
      thisTrail
    )
    // axios.get('/api/trails/' + this.props.match.params.id)
    //   .then((response) => {
    //     this.setState({
    //       name: response.data.name, 
    //       length: response.data.length, 
    //       elevation: response.data.elevation, 
    //       description: response.data.description, 
    //       challenge: response.data.challenge 
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
      return (
        <div className="App">
          <h1>Selected Trail Details</h1>
          <ul>
            <li>{this.state.name}</li>
            <li>{this.state.length}</li>
            <li>{this.state.elevation}</li>
            <li>{this.state.description}</li>
            <li>{this.state.challenge}</li>
          </ul>
          <Link to="/"><button>Back</button></Link>
          <Link to={"/trails/edit/" + this.props.match.params.id}><button>Edit</button></Link>
        </div>
        
                
      )
    }

}
  



export default TrailsDetails;
