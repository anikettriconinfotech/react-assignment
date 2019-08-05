import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
      console.log(this.state.posts)
    })
    .catch(console.log)
  }
  render() {

    return (
       <div className="div1">
        <div className="div2">
        <h1>Posts</h1>
        {this.state.posts.map((todo) => (
          <div className="div3">
            <div className="div4">
              <h5 className="div5">{todo.userId}</h5>
              <h6 className="div6">
              { todo.title}              
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;