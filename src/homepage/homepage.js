import React from 'react'
import {Redirect} from "react-router-dom";


export class Homepage extends React.Component{
    


    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/about' />
        }
      }
      render () {
        return (
           <div>
            {this.renderRedirect()}
            <button onClick={this.setRedirect}>Click To See The Detail</button>
           </div>
        )
      }
        

}

        
    
   



