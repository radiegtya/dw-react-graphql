import React from 'react';
import Profile from './components/Profile';

export default ()=> {
  const hello = "Hello, dumbwaystolearn.com";
  return (
    <div>
      <p>{hello}</p>
      <p>{hello}</p>

      <Profile/>
    </div>
  );
}
