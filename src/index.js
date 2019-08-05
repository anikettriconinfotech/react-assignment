import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import Counter from './components/counter';
import PersonList from './components/PersonList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Users from './components/users';

ReactDOM.render(
<div>
<Router>
<ul>
    <li><Link to = "/welcomepage">Welcome Page</Link></li>
    <li><Link to = "/">Posts</Link></li>
    <li><Link to = "/users">Users</Link></li>
</ul>
    <Route exact path = "/welcomepage" render = {
    () => {
        return (<h2>Welcome Page</h2>)
    }
}></Route>
<Route exact path = "/" component = {PersonList}></Route>
    

    <Route exact path = "/users" component = {Users}></Route>
    </Router>

</div>, 

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
