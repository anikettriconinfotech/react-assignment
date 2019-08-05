import React from 'react';
import axios from "axios";

export class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            post: [],
           
        }
    }

   
    fetchApiFromPosts(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            this.setState({
                post: response.data,
                name:"Shashank"
            })
            console.log(response.data);
        })
        .catch(function (error) {
            console.log("The error encountered is:"+error);
        })
    }

    componentDidMount() {
        this.fetchApiFromPosts();
    }

    render() {
        //var myuser=this.state.users;
        //var user = myuser.map((user)=>{return user.name;});
        var postId=this.state.post;
        var postIdToPrint=postId.map((postId)=>{ return postId.userId});

        var postCommentToPrint=postId.map((postId)=>{return postId.body});
        
        return (
            <div>
                I am a homePage with name as {this.state.name}.
            </div>
        );
    }
}
