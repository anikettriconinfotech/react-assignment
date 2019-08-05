import React from "react";
import axios from 'axios'


  
export class Post extends React.Component{

    constructor (props){
        super(props);
        this.state =  {
            users : [ ] 
        }
       
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                this.setState({users : res.data})

            })
        
        

    };
    buttonOnClick(){
        
    }
  

    
   
    render(){
       
        return(
           
            <ul>
                 <p><b> id : body</b></p>
                {this.state.users.map(persons =><p> <li type= "none"> {persons.userId} :    {persons.body}</li></p>)}
            </ul>
            
            
        );
    }

}




