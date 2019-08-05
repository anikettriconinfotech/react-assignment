import React from 'react';

export class About extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: ''
        }
    }

    startClock = () => {
       var  interval = setInterval(this.getCurrentTime, 500);

        
    }

    getCurrentTime = () => {
        var curretTime = new Date();

        var hours = curretTime.getHours();
        var minutes = curretTime.getMinutes();
        var seconds = curretTime.getSeconds();

        minutes = (minutes < 10 ? '0' + minutes : minutes);
        seconds = (seconds < 10 ? '0' + seconds : seconds);

        this.setState({
            currentTime: hours + ':' + minutes + ':' + seconds
        })
    }
    render() {
        return (
            <div className="about">This is about section
                <button onClick={this.startClock}>Start Clock</button>
                <p>Time is : {this.state.currentTime}</p>
            </div>

        );
    }
}
