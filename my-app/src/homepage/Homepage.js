import React from 'react';
import axios from 'axios';
import './home.css';

export class HomePage extends React.Component {
    state = {
        posts: []
    }
     
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const posts = res.data;
            this.setState({posts});
        })
    }

    render(){
        return(
            <ul type='none'>
                {this.state.posts.map(post => <div id='division'><ul type='none'><li>{post.userId}</li><li>{post.body}</li></ul></div>)}
            </ul>
        );
    }
}