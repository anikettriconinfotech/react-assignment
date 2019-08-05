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
    }
    render(){
        
        let data = this.props.posts;
        console.log(data);
        return(
            <div>
               <button onClick = {() => {}}>get posts</button>
               <div className = "postsdata">
                            {
                                data.map((post) => {
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