import React from 'react';
import {HomePage} from './homepage/homepage';
import './App.css';
import {Users} from './users/users'
import {About} from './about/about'
import {Posts} from './homepage/posts'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div><nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about/">About</Link>
            </li>
            <li>
              <Link to = "/posts/">Posts</Link>
            </li>
            <li>
              <Link to = "/users/">Users</Link>
            </li>
          </ul>
          </nav>
          <Route path="/" exact component = {HomePage} />
          <Route path="/posts/" component = {Posts} />
          <Route path="/about/" component = {About} />
          <Route path="/users/" component = {Users} />
        </div>
      </Router>
    );
  }
}

export default App;