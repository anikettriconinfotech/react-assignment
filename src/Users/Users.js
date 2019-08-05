import React, { Component } from 'react'
import axios from 'axios'

export class Users extends Component {

    

    componentWillUpdate() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                This is User
            </div>
        )
    }
}

export default Users
