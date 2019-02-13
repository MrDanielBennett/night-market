import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>Night Market !</h1>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
    </div>
  );
}

export default Header;
