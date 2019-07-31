import React from 'react';
import { Comments } from './comments';
import { Player } from './player';

export class MainBar extends React.Component
{
	render(){
        return(
            <div className = 'mainbar'>
                i am mainbar
                <Player/>
                <Comments/>
            </div>
        );
    }
}
