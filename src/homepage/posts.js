import React from 'react';
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
    
    render() {
        var myposts = this.state.posts;
        return (
            <div className='posts'>
                {myposts.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>

                    );
                }
                )}
            </div>
        );
    }
}
