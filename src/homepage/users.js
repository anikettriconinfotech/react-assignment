import React from 'react';
import axios from 'axios';

export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
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
        var myuser = this.state.users;
        // var user =  myuser.map((user)=> { return (<p>{user.name}</p>);});
        return (
            // console.log(myuser.map((user)=> { return user.name; })),
            <div className='users'>
                {myuser.map((user) => {
                    return (
                        <div key={user.email}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>

                    );
                }
                )}
            </div>
        );
    }
}
