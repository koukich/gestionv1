import React, { Component } from 'react'
import './contactfor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup,Card} from 'react-bootstrap';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      users:[]
    }
  }

    componentDidMount() {
        axios.get("http://localhost:4000/users")
        .then(response => {
          console.log(response.data);
          this.setState({
            users: response.data,
      
          })
          
        })
        .catch(error => {
          console.log(error)
        })
      }
    render () {
        return (
               
                <div className="main-area ">
                  
                      <div className="main-card ">
                      <h1>Contact Form</h1>
                      <Card className="cardform shadow p-3 mb-5 bg-white rounded">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                          <ListGroup>
                          <Card.Title>This is a Name</Card.Title>
                              {this.state.users.map((user) => <ListGroup.Item key={user._id}>{user.name}</ListGroup.Item>)}
                          <Card.Title>This is a Email</Card.Title>
                              {this.state.users.map((user) => <ListGroup.Item key={user._id}>{user.email}</ListGroup.Item>)}
                      </ListGroup>

                        </Card.Body>
                      </Card>
                      </div>
                     
                </div>
           
        )
    }
}

export default Contact
