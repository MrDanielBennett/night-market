import React from 'react';

function ErrorPage (){
  const badStyle = {
    fontSize: '128px'
  };
  return(
    <div>
      <span style={badStyle}>🔥 Hey you should not be here, go back home. 🔥</span>
    </div>
  );
}

export default ErrorPage ;
