import React from 'react';
import {Post} from './Post';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export class index extends React.Component {

constructor(props) {

    super(props);

    this.state = {

      posts: [],

    }

  }


componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')

      .then((res)
        => {

        this.setState({
          posts: res.data
        })

        console.log(res.data);

      })

  }



  render() 
  {

    return (

      <Router>

        <div>
        <nav>
            <ul type='none'>
            <li><Link to="/post/">Post</Link></li>
            </ul>
        </nav>      
      <Route path="/post/" exact render={()=> <Post posts={this.state.posts}></Post>}/>
      </div>
      </Router>
  );
  } 
}
export default index;



