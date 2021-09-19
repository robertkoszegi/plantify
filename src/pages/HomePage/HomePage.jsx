import React from 'react'
// import { Link } from 'react-router-dom';
import CategoryList from '../../components/CategoryList/CategoryList';
import PlantList from '../../components/PlantList/PlantList';
// import PlantListItem from '../../components/PlantListItem/PlantListItem';
import Banner from '../../components/Banner/Banner';
import Navigation from '../../components/Navigation/Navigation';
// import QuizLink from '../../components/QuizLink/QuizLink';
// import Logo from '../../components/Logo/Logo';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

class Home extends React.Component {

  // initial state of the app when it first loads
  state = {
    plantCategories: [],
    activeCategory: "",
    lineItems: [],
    menuItems: [],
    categoryItems:[],
  }

  

  // add to cart button
  handleAddToCart = (incoming_item) => {    
    // let itemAlreadyExistsInCart = this.state.lineItems.some(obj => obj.item.name === incoming_item.name)
    // if (itemAlreadyExistsInCart) {
    //   // if item already exists in cart, increment quantity in the fanciest way possible: map + ternary operator to replace the object in question.
    //   // YOU DO: replace with a simple, readable, debuggable for loop.
    //   this.setState({lineItems: this.state.lineItems.map(obj => obj.item.name === incoming_item.name ? {...obj,qty:obj.qty+1} : obj)})
    // } else {
    //   // if item doesn't exist in cart, copy over existing cart + stick incoming_item in
    //   this.setState({lineItems: [...this.state.lineItems,{qty:1,item:incoming_item}]})
    // }
  }

  // send cart to server
  handleCheckout = async () => {
    // try {
    //   let jwt = localStorage.getItem('token')
    //   let fetchResponse = await fetch("/api/orders", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
    //     body: JSON.stringify({lineItems: this.state.lineItems}) // <-- send this object to server
    //     }) 
    //   let serverResponse = await fetchResponse.json() // <-- decode fetch response
    //   console.log("Success:", serverResponse)   // <-- log server response

    //   this.setState({lineItems: []}) // if order sent without errors, set state to empty
    // } catch (err) {
    //   console.error("Error:", err) // <-- log if error 
    // }
  }

  // lifecycle method that runs once. fetch the menu from the DB.
  async componentDidMount() {
    // try {
    //   let fetchItemsResponse = await fetch('/api/items') // <-- get data from server (Stream object)
    //   let fetchCatsResponse = await fetch('/api/categories')
    //   let items = await fetchItemsResponse.json(); // <------- convert fetch response into a js object/array
    //   let catsObjects = await fetchCatsResponse.json();
    //   let catsStrings = catsObjects.map(c => c.name) // convert [{"id":"0", name:"sandwiches"},{..] => ["sandwiches",..]
    //   this.setState({ menuItems: items, plantCategories: catsStrings})
    // } catch (err) {
    //   console.error('ERROR:', err) // <-- log if error
    // }
  }
  
  render() {
    return (
      <main className="HomePage">
        <nav className="Navigation">
          <Navigation />
        </nav>
        <h1>HomePage</h1>
        {/* <Navigation />
        <Banner />
        <CategoryList categoryItems={this.state.categoryItems}  />
        <PlantList /> */}
      </main>
    );
  }
}

export default Home;