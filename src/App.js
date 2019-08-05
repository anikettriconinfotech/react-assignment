import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Users } from './users/users';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userList: "User List",
      users: [],
      store : []
    }
  }

  componentDidMount(){
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
      <Users name="Charu" users = {this.state.users} store = {this.state.users}/>
    );
  }
}

export default App;
