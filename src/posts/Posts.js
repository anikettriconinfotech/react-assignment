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
                <button onClick={this.setPosts}>Show the Posts</button>
                {
                 posts.map((post) => {
                    return (
                            <div key={post.id}>
                              <p> {post.id}</p>
                                {post.title}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Posts;