import React from 'react';
import { Post } from './post/Post';
import './App.css';
import { About } from './about/About';
import { Users } from './users/Users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';




export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      curTime:''
    }
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res =>{
        this.setState({posts : res.data})
        console.log(res);
    })
    
    .catch(function (err){
        console.log(err);
    })

      setInterval( () => {
        this.setState({
          curTime : new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        })
      },1000)
    
}

  render() {
    return (
      <Router>
        <div>
          <nav>
          <h1>Time : {this.state.curTime}</h1>
            <ul className="list">
              <li>
                <Link to="/">Posts</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
              
            </ul>
            
          </nav>

          <Route path="/" exact render={() => <Post posts={this.state.posts}></Post>} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
