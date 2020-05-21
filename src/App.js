import React from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <div >
      <Route exact path="/" component={Login}/>
      <Route exact path="/HomePage" component= {HomePage}/>
      <Route exact path="/Register" component={Register}/>
    </div>
  );
}

export default App;
