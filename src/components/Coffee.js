import React, {Component} from 'react';

export default class Coffee extends Component{

  render(){
    const {bean, waterVolume, type} = this.props;

    return (
      <div>
        <p>My Coffee: </p>
        <ul>
          <li>Bean: {bean}</li>
          <li>Water Volume: {waterVolume}</li>
          <li>Type: {type}</li>
        </ul>
      </div>
    );
  }
}
