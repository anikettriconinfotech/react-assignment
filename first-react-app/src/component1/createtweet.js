import React from 'react';

export class CreateTweet extends React.Component{
    
    render() {
        return(
            <div className = 'tweet' >
                <textarea></textarea>
                <button>Tweet</button>
            </div>
        );
    }
}