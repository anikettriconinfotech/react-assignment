import React from 'react';

 export class getPost extends React.Component {
  constructor(){
    super()
    this.state={
      items:[],
      isLoaded:false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(json =>{
      this.setState({
        isLoaded:true,
        items:json,
        
      })
    });
  }

  render() {
    var {isLoaded,items}=this.state;
    if(!isLoaded){
    return <p> loading...</p>
    }
    else{
    return (
        <div>
        <ol>
       {items.map(item => (
         <div>
          {item.id} 
           {item.title}
         </div>
         ))};
         </ol>
       </div>
      )
      }
}
}

