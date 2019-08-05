import React from 'react';

export class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        };
    }
    
    render() {
        return(
            <div>
                <p>{ this.state.date.toLocaleTimeString() }</p>
            </div>
        );
    }
}