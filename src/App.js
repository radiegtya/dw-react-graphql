import React, {Component} from 'react';
import Coffee from './components/Coffee';
import Glass from './components/Glass';
import Saucer from './components/Saucer';

export default class App extends Component{

  render(){
    console.log('render');
    return (
      <div>
        <Coffee
          waterVolume={1}
          bean="robusta"
          type="expresso"
        />
        <Glass color="red"/>
        <Saucer width={100}/>
      </div>
    )
  }

}
