import React, { Component } from 'react'

export class About extends Component {
    state={
        curTime:'',
    }
    componentDidMount() {
        setInterval( () => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        },1000)
      }
    render() {
        return (
            <div>
                <p>{this.state.curTime}</p>
            </div>
        )
    }
}

export default About
