import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

function Header(){
  return(
    <div>
      <AppBar position="static">
        <h1>Night Market !</h1>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </AppBar>
    </div>
  );
}

export default Header;
