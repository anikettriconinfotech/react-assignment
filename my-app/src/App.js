import React from 'react';
import { HomePage } from './homepage/Homepage';
import './App.css';
import { AboutPage } from './about/about';
import { UserPage } from './users/user';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
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
            </ul>
          </nav>

          <Route path="/" exact component={HomePage} />
          <Route path="/about/" component={AboutPage} />
          <Route path="/users/" component={UserPage} />
        </div>
      </Router>
    );
  }
}



export default App;
