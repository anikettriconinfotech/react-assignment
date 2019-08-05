import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class PersonList extends Component {
    state = { persons : [] }
    
    handleSubmit = event =>{
        event.preventDefault();

        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            this.setState({persons : res.data});
        });
    }

    /*componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            this.setState({persons : res.data});
        });
    }*/

    render() { 
        return (
            <div>
                
            

            <button onClick = {this.handleSubmit} className = "btn btn-primary m-2">See posts</button>

            <ul>
            {this.state.persons.map(person => 
                <li key = {person.id}>
                <b>UserId:</b> {person.userId}<br></br>
                <b>Title:</b>   {person.title}<br></br>
                <b>Body:</b>   {person.body}
                </li>    
            )} 
            </ul>

        </div> );
    }
}
 
export default PersonList;