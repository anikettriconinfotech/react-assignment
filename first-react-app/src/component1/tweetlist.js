import React from 'react';

export class TweetList extends React.Component{
    
    render() {
        return(
            <p>{this.props.tweetlist}</p>
        );
    }
}