import React from 'react';

import './App.css';

import Home from '../Components/Home/Home';
import Cards from '../Components/Cards/Cards';
import Settings from '../Components/Settings/Settings';
import Favorites from '../Components/Favorites/Favorites';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/cards' component={Cards}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/store' component={Favorites}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
