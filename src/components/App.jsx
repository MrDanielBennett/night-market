import React from 'react';
import Header from './Header';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Redirect from='/hello' to='/products'/>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route component={ErrorPage} /> 
      </Switch>
    </div>
  );
}

export default App;
