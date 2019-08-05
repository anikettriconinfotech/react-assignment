import React from 'react';
import './App.css';
import { Post } from './Post/Post';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from './About/About';
import { Users } from './Users/Users';
import axios from 'axios';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({ posts: res.data })
        console.log(res.data);
      })
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul type='none'>
              <li>
                <Link to="/post/">Post</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/post/" exact render={() => <Post posts={this.state.posts}></Post>} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }

}

export default App;
