import React from 'react';
import './Post.css';


export class Post extends React.Component {

    constructor(props) {
        super(props);
        this.getPosts = this.getPosts.bind(this);
        this.state = {
            posts: [],
        }
    }

    getPosts = (event) => {
        this.setState({
            posts: this.props.posts
        })
    }

    render() {
        let posts = this.state.posts;
        return (
            <div className = "postPage">
                <p>Hi I am Post. Click on the Button to Get Posts</p>
                <button id='getPostButton' onClick={ this.getPosts }>Get Posts</button>
                {
                    posts.map((post) => {
                        return (
                            <ul type = 'none' key = {post.id} className = "post-block">
                                <li>
                                    Id: { post.id }
                                </li>
                                <li>
                                    Title: { post.title }
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}