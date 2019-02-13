import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Header(){
  const appStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const leftStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  };

  const linkStyle = {
    color: '#f8f8f8',
    margin: '0 0.75em'
  };

  return(
    <div>
      <AppBar position="static">
        <div style={appStyle}>
          <div style={leftStyle}>
            <IconButton color="secondary">
              <MenuIcon/>
            </IconButton>
            <h1>Night Market !</h1>
          </div>
          <div>
            <Link style={linkStyle} to='/'>Home</Link>
            <Link style={linkStyle} to='/products'>Products</Link>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
