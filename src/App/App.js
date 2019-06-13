import React from 'react';

import './App.css';

import Home from '../Components/Home/Home';
import Cards from '../Components/Cards/Cards';
import Settings from '../Components/Settings/Settings';
import Word from '../Components/Word/Word';

import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/cards' component={Cards}/>
            <Route path='/word' component={Word}/>
            <Route path='/settings' component={Settings}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
