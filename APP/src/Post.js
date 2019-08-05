import React from 'react';

export class Post extends
  React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
    }
  }

  getPosts = (event) => { this.setState({ posts: this.props.posts }) }


  render() {

    let posts = this.state.posts;
    return (
      <div className="Page">
      <p>Hi I am Post. Click on the Button to Get Posts</p>

        <button id='PostButton' onClick={this.getPost}>Get Posts</button>
        {
            posts.map((post)=> {
              return (
                <ul type='none' key={post.id} className="Block">
                <li> Id: {post.id}</li>
                  <li> Title: { post.title}</li>
                   </ul>
               )
         })         
       }
     </div>            

     );            
 }
 }
                 

                

             

           

         

        

     

   

 
