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
    plantListings:[],
    activeCategory: "",
    menuItems: [],
    categoryItems:[],
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
    return (
      <main className="HomePage">
        <nav className="Navigation">
          <Navigation />
        </nav>
          <Banner />
        <h1>HomePage</h1>
        <PlantList plantListings={this.state.plantListings} handleAddToCart={this.handleAddToCart}/>
        {/* <Navigation />
        <Banner />
        <CategoryList categoryItems={this.state.categoryItems}  />
        <PlantList /> */}
      </main>
    );
  }
}

export default Home;