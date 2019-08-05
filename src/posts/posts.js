import React from 'react';
import axios from 'axios';
import './posts.css';
export class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    getPosts = () => {
        console.log('Get post method is called')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState ( {
               posts: response.data
            })
           
            console.log(this.state.posts[0]);
        })
        .catch((err) => {
            console.log('Error');
        })
    }
    
    render(){
        
        return (
           
            <div className="topics">
                <button onClick = {this.getPosts}>Get Posts</button>
                {
                    this.state.posts.map((post) => {
                        return (
                            <div className="postDiv" key = {post.id}>
                                <p>User Id : {post.userId}</p>
                                <p>Title : {post.title}</p>
                                <p>Body : {post.body}</p>
                            </div>
                        );
                    })
                }
            </div>
            
        );
    }
}