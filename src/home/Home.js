import React from 'react';
import './Home.css'

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        };
        this.tick = this.tick.bind(this);
    }

    tick = () => {
        this.setState({
            time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        });
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    render() {
        return (
            <p className="home">
                {this.state.time}
            </p>
        );
    }
}

export default Home;

