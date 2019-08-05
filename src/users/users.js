import React from 'react';
import axios from 'axios';

export class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          users: [],
          filteredList: []
        }
        console.log(this.state.users);
      }

      componentDidMount(){
        this.setState({users: this.props.users,});
      }
      componentWillMount(){
        this.setState({users: this.props.users,});
      }
    filterList = (ev) => {
       axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      this.setState(
        {users: response.data,
        store: response.data}
      )
    })
       

    }
    render() {
        return (
            <div>
                <p>Users Component</p>
                {/* <p>{this.props.name}</p> */}
                <p>Total no of users is {this.props.users.length}</p>
                <button className="details"  onClick={this.filterList}>Click Me</button>

                <table>
                    <tbody>
                    <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    </tr>
                    {
                        this.state.users.map((user) => {
                            return (
                                <tr key= {user.id}>
                                    <td>{user.userId}</td>
                                    <td>{user.title}</td>
                                    <td>{user.body}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
