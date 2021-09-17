import React, {Component} from 'react';
// import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation'
import Banner from './components/Banner/Banner'
import PlantList from './components/PlantList/PlantList'
import './App.css';
// import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    user: null,
  }

  render() {
    return(
      <main className="App">
        <Navigation />
        <Banner />
        <PlantList />
      </main>
    )
  }

}

export default App;
