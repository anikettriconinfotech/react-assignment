import React from 'react';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.getPost = this.getPost.bind(this);
    }


    getPost = (e) => {
        this.setState({ posts: this.props.posts })
    }

    render() {

        return (
            <div className="post">
                <button onClick={this.getPost}>Get Post</button>
                { 
                    this.state.posts.map(post => {
                        return (
                            <ul key={post.id}>
                                <li>{post.title}</li>
                            </ul>
                        );
                    })

                } 
            </div>
        )
    }
}

export default Post;