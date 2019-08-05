import React, { Component } from 'react'
 
export class Posts extends Component {
 constructor(props){
 super(props);
 this.state={
 value:''
 };
 }
 render() {
 let Info = this.props.posts_data;
 console.log('postInfo');
 return (
 <div>
 {
 Info.map((post) => {
 return(
 <div key={post.email}>
 <p>{post.postId}</p>
 <p>{post.name}</p>
 </div>
 )
 })
 }
 </div>
 )
 }
}
 
export default Posts;