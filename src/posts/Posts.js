import React from 'react';

export class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.setPosts = this.setPosts.bind(this);
    }

    setPosts = (e) => {
        this.setState({
            posts: this.props.posts
        })
    }

    render() {
        let posts = this.state.posts;
        return (
            <div className="posts">
                <button onClick={this.setPosts}>Show Posts</button>
                {
                    posts.map((post) => {
                        return (
                            <ul key={post.id}>
                                <li>{post.id}</li>
                                <li>{post.title}</li>
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}

export default Posts;