import React from 'react';
import '../index.css';
import EventList from './EventList';

function Home(){
  return(
    <div className='homeImage'>
      <h2>Welcome to Night Market!</h2>
      <h3>Our Market Schedule:</h3>
      <EventList/>
    </div>
  );
}

export default Home;
