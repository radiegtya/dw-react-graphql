import React, {Component} from 'react';

export default class App extends Component{

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillReceiveProps(){

  }

  componentWillUnmount(){

  }

  render(){
    console.log('render');
    return (
      <p>Hello dumbwaystolearn.com</p>
    )
  }

}
