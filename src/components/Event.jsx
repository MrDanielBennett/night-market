import React from 'react';
import PropTypes from 'prop-types';

function Event({day, location, hours, booth}){
  return(
    <div>
      <h3>{day}</h3>
      <p>{location} - Booth: {booth}</p>
      <p>{hours}</p>
    </div>
  );
}

Event.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Event;
