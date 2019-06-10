import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import Settings from '../Settings/Settings';
import Word from '../Word/Word';

import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
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
