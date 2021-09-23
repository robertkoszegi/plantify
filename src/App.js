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
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from './pages/AuthPage/AuthPage'
// import SignUpForm from './components/SignUpForm/SignUpForm'
// import LoginForm from './components/LoginForm/LoginForm'

// BE SURE TO REVIEEW Protecting Routes Pt. 1 : Frontend sends token, incomplete

class App extends Component {
  state = {
    user: null,
    lineItems: [],
    wishLineItems:[],
    paid: false,
    total: 0,

    
  }

  setUserInState = (incomingUserData) => {
    this.setState({user: incomingUserData})
  }

  updateCartTotal = () => {
    // cart total
    let totalCartPrice = 0;
    for (let l of this.state.lineItems) {
      totalCartPrice += l.item.price * l.qty
    }
    this.setState({total: totalCartPrice})
  }

  // add to cart button
  handleAddToCart = (incoming_item) => {
    console.log("incoming_item:",incoming_item)
    let itemExists = this.state.lineItems.some(obj => obj.item.name === incoming_item.name)
    console.log(itemExists)
    if(itemExists) {
      // increment qty
      this.setState({lineItems: this.state.lineItems.map(obj => obj.item.name === incoming_item.name ? {...obj,qty:obj.qty+1} : obj)}, this.updateCartTotal)
    } else {
      // add item
      this.setState({lineItems: [...this.state.lineItems, {qty: 1,item:incoming_item}]}, this.updateCartTotal)
    }
    
  }

  handleAddToWishlist = (incoming_item) => {
    let wishItemExists = this.state.wishLineItems.some(obj => obj.item.name === incoming_item.name)
    if(wishItemExists){
      this.setState({wishLineItems: this.state.wishLineItems.map(obj => obj.item.name === incoming_item.name ? {...obj,qty:obj.qty+1} : obj)})
    }else {
      this.setState({wishLineItems: [...this.state.wishLineItems, {qty: 1, item:incoming_item}]})
    }
  }
  
  handleCheckout = async() => {
    console.log(this.state.lineItems)
    
    // No checkout if cart is empty 
    if (this.state.lineItems.length === 0) {
      alert("Your shopping cart is empty")
      // temp alert
    } else {
      try {

        this.setState({paid: true})
        let jwt = localStorage.getItem('token');
        let fetchResponse = await fetch("api/orders", {
          method: "POST",
          headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
          body: JSON.stringify({
            lineItems: this.state.lineItems,
            paid: this.state.paid,
            total: this.state.total
          })
        })
        // let serverResponse = await fetchResponse.json()
        // console.log("Success:", serverResponse)

        // clear line items
        this.setState({lineItems:[]})
        // refresh cached window
        window.location.reload(false)
      } catch(err) {
        console.error("Error:", err)
      }

    }
  }

componentDidMount = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        //We call our verify route that just uses the auth middleware to verify the token. See the server comments for more details
        const response = await fetch("/api/users/verify", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        //If the token is expired data.name will be TokenExpiredError so we throw a new error so out catch block can handle it
        if (data.name === "TokenExpiredError") throw new Error("token expired");

        let userDoc = JSON.parse(atob(token.split(".")[1])).user;
        this.setState({ user: userDoc });
      } catch (err) {
        //If there is a problem with the response from the verify link, set the user to null
        this.setState({ user: null });
      }
    }
  };
// console.log(this.state.lineItems)
  render() {
    return(
      <main className="App">
        { this.state.user ? 
        <Switch>
          <Route path='/home' render={(props) => (
            <HomePage {...props} setUserInState={this.setUserInState}/>
          )}/>

          <Route path='/details' render={(props) => (
            <PlantDetailPage {...props} lineItems={this.state.lineItems} wishLineItems={this.state.wishLineItems} handleAddToWishlist={this.handleAddToWishlist} handleAddToCart={this.handleAddToCart}/>
          )}/>

          <Route path='/quiz' render={(props) => (
            <QuizPage {...props}/>
          )}/>

          <Route path='/recommendations/show' render={(props) => (
            <RecommendationsPage {...props} />
          )}/>

          <Route path='/order' render={(props) => (
            <OrderPage {...props} 
              lineItems={this.state.lineItems} 
              paid={this.state.paid} 
              handleCheckout={this.handleCheckout}
              cartTotal={this.state.total} /> 
          )}/>

          {/* -- These pages are protected -- */}
          <Route path='/orderhistory' render={(props) => (
            <OrderHistoryPage {...props} user={this.state.user}/>
          )}/>

          <Route path='/wishlist' render={(props) => (
            <WishListPage {...props} wishLineItems={this.state.wishLineItems} user={this.state.user}/>
          )}/>

          {/* <Route path='/signup' render={(props)=> (
            <SignUpForm {...props} user={this.state.user} />
          )}/>
          <Route path='/login' render={(props)=> (
            <LoginForm {...props} user={this.state.user} />
          )}/>
 */}
          {/* and in case nothing matches, we redirect: */}
          <Redirect to="/home" />
        </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
          }
      </main>
    )
  }

}

export default App;
