import React, { Component } from 'react'
import {Mainbar} from "./Mainbar";
import {Sidebar} from "./Sidebar";

export class Homepage extends Component {
    render() {
        return (
            <div className='Homepage'>
                <Mainbar/>
                <Sidebar/>
            </div>
        )
    }
}

export default Homepage
