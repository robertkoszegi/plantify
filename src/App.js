import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
import WishListPage from './pages/WishListPage/WishListPage'
import QuizPage from './pages/QuizPage/QuizPage'
import RecommendationsPage from './pages/RecommendationsPage/RecommendationsPage'
import PlantDetailPage from './pages/PlantDetailPage/PlantDetailPage'
import OrderPage from './pages/OrderPage/OrderPage'
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage'

class App extends Component {
  state = {
    user: null,
    lineItems: []
    
  }

  setUserInState = (incomingUserData) => {
    this.setState({user: incomingUserData})
  }

  // add to cart button
  handleAddToCart = (incoming_item) => {
    console.log("incoming_item:",incoming_item)
    let itemExists = this.state.lineItems.some(obj => obj.item.name === incoming_item.name)
    console.log(itemExists)
    if(itemExists) {
      // increment qty
     this.setState({lineItems: this.state.lineItems.map(obj => obj.item.name === incoming_item.name ? {...obj,qty:obj.qty+1} : obj)})
    } else {
      // add item
      this.setState({lineItems: [...this.state.lineItems, {qty: 1,item:incoming_item}]})
    }
    
  }
  
  handleCheckout = async() => {
    let lineItems = this.state.lineItems
    console.log(lineItems)
    // No checkout if cart is empty 
    if (lineItems.length == 0) {
      alert("Your shopping cart is empty")
      // temp alert
    } else {
      try {
        // let jwt = localStorage.getItem('token');
        let fetchResponse = await fetch("api/orders", {
          method: "POST",
          header: {"Content-Type": "application/json"},
          body: JSON.stringify({lineItems: lineItems})
        })
        let serverResponse = await fetchResponse.json()
        console.log("Success:", serverResponse)
      } catch(err) {
        console.error("Error:", err)
      }
    }
  }

// console.log(this.state.lineItems)
  render() {
    return(
      <main className="App">

        <Switch>
          <Route path='/home' render={(props) => (
            <HomePage {...props}/>
          )}/>

          <Route path='/details' render={(props) => (
            <PlantDetailPage {...props} lineItems={this.state.lineItems} handleAddToCart={this.handleAddToCart}/>
          )}/>

          <Route path='/quiz' render={(props) => (
            <QuizPage {...props}/>
          )}/>

          <Route path='/recommendations/show' render={(props) => (
            <RecommendationsPage {...props} />
          )}/>

          <Route path='/order' render={(props) => (
            <OrderPage {...props} lineItems={this.state.lineItems} handleCheckout={this.handleCheckout}/> 
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
