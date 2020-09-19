import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

import Header1 from './components/header/Header1';

class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:4000/users")
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){
    return (
      <div className="app">
        <div className="buddy">
        {/* <Sidebar />
        <Content /> */}
        <Header1 />
        </div>    
      </div> 
      
    );
  }
  
}

export default App;
