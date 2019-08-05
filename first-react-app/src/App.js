import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component1 } from './component1/Component1'
import {About} from './about/about';
import { Users } from './users/users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import { Posts } from './posts/posts';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usersdata: [],
      postsdata: []
    };
    this.addUser = this.addUser.bind(this);
    //this.onClickGetPosts = this.onClickGetPosts.bind(this);
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.setState({ usersdata: res.data })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({
          postsdata : response.data
        })
        console.log(this.state.postsdata);
      })
      .catch(error => {
        console.log(error);
      })
      
  }

  onClickGetPosts(){
    
  }


  addUser(userName){
    let users = this.state.usersdata;
    console.log("usefcsdfrName");
    users.push({
      name : userName,
      phone : 11111111,
      email : 'some-email'
    });
    this.setState({ usersdata: users})
  }
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
              <li>
                <Link to="/posts/">Posts</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Component1} />
          <Route path="/about/" component={About} />
          <Route path="/users/" render = {() => <Users users_data = {this.state.usersdata} addUserEvent = {this.addUser}/> } />
          <Route path="/posts/" render = {() => <Posts  posts = {this.state.postsdata} getPostsEvent = {this.onClickGetPosts}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
