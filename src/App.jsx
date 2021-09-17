import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation'
import Banner from './components/Banner/Banner'
import PlantList from './components/PlantList/PlantList'
import PlantDetail from './components/PlantDetail/PlantDetail'
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
        <Switch>
        <Route path='/details' render={(props) =>(
          <PlantDetail />
        )} />
        
        <Route path='/' render={(props) => (
          <PlantList />
        )} />
        </Switch>
      </main>
    )
  }

}

export default App;
