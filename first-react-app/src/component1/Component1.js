import React from 'react';
import { MainBar } from './mainbar';
import { SideBar } from './sidebar';
import './compStyle.css';

export class Component1 extends React.Component{
    render() {
        return (
            <div className='component1'>
                <MainBar />
                <SideBar />
            </div>
        );
    }
}