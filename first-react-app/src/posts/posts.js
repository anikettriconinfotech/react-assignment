import React from 'react';
import './posts.css';


export class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postsdata : []
        };
        this.onClickGetPosts = this.onClickGetPosts.bind(this);
    }
    onClickGetPosts(){
        this.setState({
            postsdata : this.props.posts
        })
    }
    render(){
       
        return(
            <div>
               <button onClick = {this.onClickGetPosts}>get posts</button>
               <div className = "postsdata">
                            {
                                this.state.postsdata.map((post) => {
                                    return(
                                        <div className='post' key={post.id}>
                                            <p>{ post.id }</p>
                                            <p>{ post.title }</p>
                                            <p>{ post.body }</p>
                                        </div>
                                    )
                                })
                            }
                </div>
            </div>
        );
    }
}
