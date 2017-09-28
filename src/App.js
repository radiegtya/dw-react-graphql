import React, {Component} from 'react';

export default class App extends Component{

  handleClick(){
    alert('I am clicked!');
    console.log('I am clicked!');
  }

  render(){
    return (
      <button
        onClick={()=> this.handleClick()}
      >
        Click Me!
      </button>
    )
  }
}
