import React, {Component} from 'react';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      number: 1
    }
  }

  handleClick(){
    const number = this.state.number + 1;
    this.setState({
      number
    })
  }

  render(){
    return (
      <div>
        <button
          onClick={()=> this.handleClick()}
        >
          Increase Number
        </button>
        <p>{this.state.number}</p>
      </div>
    )
  }
}
