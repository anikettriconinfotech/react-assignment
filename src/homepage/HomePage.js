import React from 'react';
import { MainBar } from './mainbar';
// import { DashBoard } from './dashboard';

export class HomePage extends React.Component
{
	render(){
        return(
            <div className = 'homepage'>
                I am in HomePage
                <MainBar/>
                {/* <DashBoard/> */}
            </div>
        );
    }
}
