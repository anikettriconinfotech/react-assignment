import React, { Component } from 'react'
import {CreateTweet} from "./CreateTweet";

export class Mainbar extends Component {
    render() {
        return (
            <div>
                I am in mainbar
                <p> {this.props.tweet}</p> 
                <CreateTweet />
            </div>
        )
    }
}

export default Mainbar
