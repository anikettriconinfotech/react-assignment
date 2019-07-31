import React from 'react';

export class DashBoard extends React.Component {
    render() {
        return (
            <div className='dashboard'>
                I am in DashBoard
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Subscription</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
        );
    }
}
