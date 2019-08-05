import React from 'react';
import axios from 'axios';

export class Users extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            this.setState ( {
               users: response.data
            })
           
        })
        .catch((err) => {
            console.log('Error');
        })
    }
    render(){
        return (
           
            <div className="topics">You have entered users list. It is empty. hahaha</div>
            
        );
    }
}