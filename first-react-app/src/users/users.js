import React from 'react';
import './users.css';

export class Users extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addUserNameInput : '',
        };
        this.onClickAddUser = this.onClickAddUser.bind(this);
        this.addUsername = this.addUsername.bind(this);
    }
    
    onClickAddUser(){
        console.log("dgh");
        this.props.addUserEvent(this.state.addUserNameInput);
    }
    addUsername(event){
        let valueName = event.target.value;
        this.setState({ addUserNameInput : valueName })
    }

    render() {
        let usersData = this.props.users_data;
        //console.log(usersData);
        return(
            <div>
                <div className="addUserContainer">
                    <input type = "text" onChange={this.addUsername} ></input>
                    <button onClick = {this.onClickAddUser}>Add User</button>
                </div>
                <div className = "usersdata">
                    {
                        usersData.map((user) => {
                            return(
                                <div className='user' key={user.email}>
                                    <p>{ user.name }</p>
                                    <p>{ user.phone }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}