import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from './homepage/homepage';
import { About } from './About/About';
import { Users } from './Users/Users';
//import {router} from './router/router';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state = {
      name: 'React',
      post: [],
     
      }

      this.state={
        id:[],
        comment:[]
      }
  }

  fetchApiFromPosts(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        this.setState({
            post: response.data
        })
        //console.log(response.data);
    })
    .catch(function (error) {
        console.log("The error encountered is:"+error);
    })
  }

  componentDidMount(){
    this.fetchApiFromPosts();
  }


  handleClick(){
    /*        this.setState({
          name:'Shashank'
        });
    */
        var postId=this.state.post;
        var postIdToPrint=postId.map((postId)=>{ return postId.id});
        var postCommentToPrint=postId.map((postId)=>{return postId.body});
        console.log(postIdToPrint);
        this.setState({
          id:postIdToPrint,
          comment:postCommentToPrint
        });
        //console.log(postCommentToPrint);
        //console.log(this.state.id);

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
                <Link to="/about/About">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={HomePage} />
          <Route path="/about/About" component={About} />
          <Route path="/users/" component={Users} />
          </div>
          <div>
          <button onClick={this.handleClick}>
              Post {this.state.name}
            </button>
          </div>
      </Router>

    );
  }
}

export default App;
