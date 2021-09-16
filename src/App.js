import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    user: null,
  }

  render() {
    return(
      <main className="App">
        {/* this ternary operator asks: is there a user in state? */}
        {/* if yes, they can see our pages: neworder, etc. */}
        {/* if no(user is null), show them only the <AuthPage> */}
        { this.state.user ? 
          <Switch>
            <Route path='/orders/new' render={(props) => (
              <NewOrderPage {...props}/>
            )}/>
            <Route path='/orders' render={(props) => (
              <OrderHistoryPage {...props}/>
            )}/>
            <Redirect to="/orders" />
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
      </main>
    )
  }


  
}


export default App;
