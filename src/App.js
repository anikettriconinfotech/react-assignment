import React from 'react';
import { Home } from './home/Home';
import { About } from './about/About';
import { Posts } from './posts/Posts';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
                <Link to="/posts/">Posts</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/posts/" render={() => <Posts posts={this.state.posts}></Posts>} />
        </div>
      </Router>
    );
  }
}

export default App;
