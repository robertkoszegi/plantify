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

  handleAddToCart = (incoming_item) => {
    console.log("incoming_item:",incoming_item)
    let itemExists = this.state.lineItems.some(obj => obj.item.name === incoming_item.name)
    console.log(itemExists)
    if(itemExists) {
      this.setState({lineItems: this.state.lineItems.map(obj => obj.item.name === incoming_item.name ? {...obj,qty:obj.qty+1} : obj)}, this.updateCartTotal)
    } else {
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
  handleAddToWishListDatabase = async () => {
    try{
        let jwt = localStorage.getItem('token')
        let fetchResponse = await fetch("api/wishlist",{
        method: "POST",
        headers: {"Content-Type": "application/json", 'Authorization': jwt },
        body: JSON.stringify({
            wishLineItems: this.state.wishLineItems,
        }),
      })
      this.setState({wishLineItems:[]})
      } catch(err){
          console.log(err.message)
        console.log("Error:", err)
      }
  }

  handleCheckout = async() => {
    console.log(this.state.lineItems)
    
    if (this.state.lineItems.length === 0) {
      alert("Your shopping cart is empty")
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

        this.setState({lineItems:[]})
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
        const response = await fetch("/api/users/verify", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        if (data.name === "TokenExpiredError") throw new Error("token expired");

        let userDoc = JSON.parse(atob(token.split(".")[1])).user;
        this.setState({ user: userDoc });
      } catch (err) {
        this.setState({ user: null });
      }
    }
  };
  render() {
    return(
      <main className="App">
        { this.state.user ? 
        <Switch>
          <Route path='/home' render={(props) => (
            <HomePage {...props} 
            user={this.state.user} 
            setUserInState={this.setUserInState}/>
          )}/>

          <Route path='/details' render={(props) => (
            <PlantDetailPage {...props} 
            lineItems={this.state.lineItems} 
            wishLineItems={this.state.wishLineItems} 
            handleAddToWishlist={this.handleAddToWishlist} 
            handleAddToCart={this.handleAddToCart}
            user={this.state.user}
            setUserInState={this.setUserInState}/>
          )}/>

          <Route path='/quiz' render={(props) => (
            <QuizPage {...props}
            user={this.state.user}
            setUserInState={this.setUserInState}
            />
          )}/>

          <Route path='/recommendations/show' render={(props) => (
            <RecommendationsPage {...props} 
            user={this.state.user}
            setUserInState={this.setUserInState}
            />
          )}/>

          <Route path='/order' render={(props) => (
            <OrderPage {...props} 
              lineItems={this.state.lineItems} 
              paid={this.state.paid} 
              handleCheckout={this.handleCheckout}
              cartTotal={this.state.total}
              user={this.state.user} 
              setUserInState={this.setUserInState}/> 
          )}/>

          {/* -- These pages are protected -- */}
          <Route path='/orderhistory' render={(props) => (
            <OrderHistoryPage {...props} 
            user={this.state.user} 
            setUserInState={this.setUserInState}/>
          )}/>

          <Route path='/wishlist' render={(props) => (
            <WishListPage {...props} 
            handleAddToCart={this.handleAddToCart}
            handleAddToWishListDatabase={this.handleAddToWishListDatabase}
            wishLineItems={this.state.wishLineItems} 
            user={this.state.user} 
            setUserInState={this.setUserInState}/>
          )}/>

          <Redirect to="/home" />
        </Switch>
           :
          <AuthPage 
          user={this.state.user}
          setUserInState={this.setUserInState}/>
          } 
      </main>
    )
  }

}

export default App;
