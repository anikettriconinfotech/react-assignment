import React from 'react';
import { CreateTweet } from './createtweet';
import { TweetList } from './tweetlist';
import './compStyle.css';


export class MainBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tweetlist : "Updated from Mainbar"
        };
    }
    
    render() {
        return(
            <div className="main-bar">
                <CreateTweet />
                <TweetList tweetlist = { this.state.tweetlist }/>
            </div>
        );
    }
}