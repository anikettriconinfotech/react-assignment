import React from 'react';

export class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          users: this.props.users,
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
       this.filteredList = this.props.users;
        this.filteredList = this.filteredList.filter((item) => {
            return item.name.toUpperCase().search(
                ev.target.value.toUpperCase()) !== -1;
        })
        this.setState({users: this.filteredList});
        console.log(this.filteredList.length);

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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    </tr>
                    {
                        this.state.users.map((user) => {
                            return (
                                <tr key= {user.email}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
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