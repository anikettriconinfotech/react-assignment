import React from 'react';

import { Users } from './users/users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Posts } from './posts/posts';

import './App.css';


class App extends React.Component {
  render() {
    return (
      // <HomePage/>
      <Router>
        <div>
          <ul>

            <li>
              <Link to="/posts">Posts</Link>
            </li>

            <li>
              <Link to="/users">Users</Link>
            </li>

          </ul>

          <hr />


          <Route path="/posts" component={Posts} />
          <Route path="/users" component={Users} />

        </div>
      </Router>
    );
  }
}

export default App;