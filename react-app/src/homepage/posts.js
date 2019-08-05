import React from 'react';
import './homepage.css';
import axios from 'axios';

export class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({
                posts: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        })
}

render(){
        
  return (
     
      <div>
          <button onClick = {this.getPosts}>Get Posts</button>
          {
              this.state.posts.map((post) => {
                  return (
                      <div className="Posts" key = {post.id}>
                          <p>User Id : {post.userId}</p>
                          <p>Title : {post.title}</p>
                          <p>Body : {post.body}</p>
                      </div>
                  );
              })
          }
      </div>
      
  );
        }}