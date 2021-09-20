import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import WishListPage from './pages/WishListPage/WishListPage';
import QuizPage from './pages/QuizPage/QuizPage';
import RecommendationsPage from './pages/RecommendationsPage/RecommendationsPage';
import OrderPage from './pages/OrderPage/OrderPage';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage'

class App extends Component {
  state = {
    user: null,
  }

  setUserInState = (incomingUserData) => {
    this.setState({user: incomingUserData})
  }

  render() {
    return(
      <main className="App">

        <Switch>
          <Route path='/home' render={(props) => (
            <HomePage {...props}/>
          )}/>

          <Route path='/quiz' render={(props) => (
            <QuizPage {...props}/>
          )}/>

          <Route path='/recommendations' render={(props) => (
            <RecommendationsPage {...props}/>
          )}/>

          <Route path='/order' render={(props) => (
            <OrderPage {...props}/>
          )}/>

          {/* -- These pages are protected -- */}
          <Route path='/orderhistory' render={(props) => (
            <OrderHistoryPage {...props} user={this.state.user}/>
          )}/>

          <Route path='/wishlist' render={(props) => (
            <WishListPage {...props} user={this.state.user}/>
          )}/>
          {/* -------------------------------- */}

          {/* and in case nothing matches, we redirect: */}
          <Redirect to="/home" />
        </Switch>

      </main>
    )
  }

}

export default App;
