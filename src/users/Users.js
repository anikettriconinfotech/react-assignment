import React, { Component } from 'react'
import axios from 'axios';

export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: []
        }
      }
    
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        //console.log(response);
        this.setState({
            users : response.data
        })

      })
      .catch(function (error) {
        console.log(error);
      });

      
   
}
    
    render() {
        let users = this.state.users;
            return (
            <div>{
                users.map((user) =>(
                    <ul key= {user.id}>
                    <li>ID : {user.id}</li> 
                    <li>Name :{user.name}</li>
                    </ul>

                  ))}
            </div>
        );   
    }
}

export default Users
