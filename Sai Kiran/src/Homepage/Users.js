import React, { Component } from 'react'

export class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            name:''
        };
        this.addUserName=this.addUserName.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }
    addUserName(event) {
        let value = event.target.value;
        this.setState({
          userName: value,
        });
      }
    buttonClick() {
        this.setState({
            name:this.state.userName
        });
    }
    render() {
        let Info = this.props.users_data;
        console.log('userInfo');
        return (
            <div>
                <div>
                                <textarea onChange={this.addUserName} ></textarea>
                                <button onClick={this.buttonClick}> Add User </button>
                                <p>{this.state.name} </p>
                            </div>
                {

                Info.map((user) => {
                    return(
                        <div>
                            <p>{user.name}</p>
                            
                            </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Users