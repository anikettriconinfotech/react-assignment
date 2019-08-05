import React from 'react';
import {Homepage} from "./Homepage/Homepage";
import {About} from "./Homepage/About";
import {Users} from "./Homepage/Users";
import {Posts} from "./Homepage/Posts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userinfo: [],
      postinfo:[]
    };
  }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //   this.setState({userinfo:res.data})
  //   })
  // .catch(function (error) {
  // console.log(error);
  // })
  // } 
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => {
    this.setState({postinfo:res.data})
    })
  .catch(function (error) {
  console.log(error);
  })
  }
  render(){
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
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

        <Route path="/" exact component={Homepage} />
        <Route path="/About/" component={About} />
        <Route path="/Users/" render = { () => <Users users_data = {this.state.userinfo} /> } />
        <Route path="/Posts/" render = { () => <Posts posts_data = {this.state.postinfo} /> } />
      </div>
    </Router>
  );
}
}

export default App;