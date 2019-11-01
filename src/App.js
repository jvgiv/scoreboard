import React from 'react';
import logo from './logo.svg';
import './App.css';
import SportPicker from './components/SportPicker'
import { Route, Switch } from 'react-router-dom'
import Nba from './components/nba/Nba'
import Mlb from './components/mlb/Mlb'

function App() {
  return (
    <div className="App">
      
      

      <Switch>
        <Route path='/' exact component={SportPicker}/>
        <Route path='/mlb' component={Mlb} />
        <Route path='/nba' component={Nba} />
      </Switch>
    </div>
  );
}

export default App;
