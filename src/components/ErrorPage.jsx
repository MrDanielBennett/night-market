import React from 'react';

function ErrorPage (){
  const badStyle = {
    fontSize: '128px'
  };
  return(
    <div>
      <h2>You are bad!!!!</h2>
      <span style={badStyle}>🔥•</span>
    </div>
  );
}

export default ErrorPage ;
