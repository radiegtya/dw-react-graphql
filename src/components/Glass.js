import React, {Component} from 'react';

export default class Glass extends Component{

  render(){
    return (
      <div>
        <p>My Glass: </p>
        <ul style={{color: this.props.color}}>
          <li>Warna: {this.props.color}</li>
        </ul>
      </div>
    );
  }
}
