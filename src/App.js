import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
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
    plantListings: []
  }

async componentDidMount(){
    try{
        let fetchPlantsResponse = await fetch('/api/plantList')
        if (!fetchPlantsResponse.ok) throw new Error("Could not fetch plants")
        let plants = await fetchPlantsResponse.json();

        this.setState({ plantListings: plants })
        console.log(this.state)
    } catch (err){
        console.log('Error:', err)
    }
}
  render() {
    return(
      <main className="App">
        
        <Navigation />
        <Banner />
        <Switch>
        <Route path='/details' render={(props) =>(
          <PlantDetail  />
        )} />
        
        <Route path='/' render={(props) => (
          <PlantList plantListings={this.state.plantListings}/>
        )} />
        </Switch>
      </main>
    )
  }

}

export default App;
