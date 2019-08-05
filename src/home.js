import React from 'react';
import axios from 'axios';

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
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
            <ul>
                {this.state.posts.map(post => 
                <div>
                    <ul type='none'>
                        <li>Id:  {post.id}</li>
                        <li>Title:  {post.title}</li>
                        <li>Post:  {post.body}</li>
                        </ul>
                </div>)}
            </ul>
        );
    }
}