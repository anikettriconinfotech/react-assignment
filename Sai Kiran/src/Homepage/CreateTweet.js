import React, { Component } from 'react'

export class CreateTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tweetContent: '',
          tweetButtonText: 'Tweet karo',
          tweet:''
        };
        this.updateTweetContent = this.updateTweetContent.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
      }
      updateTweetContent(event) {
        let value = event.target.value;
        this.setState({
          tweetContent: value
        });
      }
      buttonClick() {
        console.log(this.state.tweetContent);
        this.setState({
            tweet:this.state.tweetContent});
      }
    render() {
        return (
            <div>
                <textarea onChange={this.updateTweetContent} ></textarea>
                <button onClick={this.buttonClick}> {this.state.tweetButtonText} </button>
                
            </div>
        )
    }
}

export default CreateTweet
