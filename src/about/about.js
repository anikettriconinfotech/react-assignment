import React from 'react'
import axios from 'axios'

export class About extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            persons:[]
        }

    }
    
  
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })

        
    }
    render(){
    
      return (
         <ul>

        { this.state.persons.map(person => 
        <li> <p>{person.id} {person.title}</p>
        <p>{person.body} </p>
            </li>)}
        
    </ul>
        )
     }
    }

