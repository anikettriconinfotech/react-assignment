import React from 'react';
import axios from 'axios';

export class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({
                    users: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        let users = this.state.users;
        return (
            users.map((user) => {
                return (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <br /><br />
                </div>
            )})
        )
    }
}