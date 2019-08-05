import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        tags:["tag1","tag2","tag3"] 
    };

    renderTags()
    {
        if(this.state.tags.length===0)
            return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>;
    }

    render() { 


        return (
        //     <div>

        // <span style={{fontSize:30}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        // <button className="btn btn-secondary btn-sm"><h5>Increment</h5></button>
        // <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>
        // </div>
            <div>{this.renderTags()}</div>

          );
    }

    getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;