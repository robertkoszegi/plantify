import React from 'react'
import './HomePage.css'
// import { Link } from 'react-router-dom';
// import CategoryList from '../../components/CategoryList/CategoryList';
import PlantList from '../../components/PlantList/PlantList';
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

  handleCat = (activeCategory) =>{
    this.setState({activeCategory});
    console.log(this.state)
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
          let fetchCatsResponse = await fetch('/api/plantList/categories')
          let plants = await fetchPlantsResponse.json()
          let cats = await fetchCatsResponse.json()
          
          if (!fetchPlantsResponse.ok) throw new Error("Could not fetch plants")
          if (!fetchCatsResponse.ok) throw new Error("Could not fetch categories")
          this.setState({ plantListings: plants, plantCategories: cats })
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
        {/* <CategoryList /> */}
        <button onClick={() => this.handleCat('6148e261a73b6d074a728570')}>Palms</button>
        <button onClick={() => this.handleCat('6148e261a73b6d074a728572')}>Ferns</button>
        <button onClick={() => this.handleCat('6148e261a73b6d074a728571')}>Succulents</button>
        <button onClick={() => this.handleCat('6148e261a73b6d074a728573')}>Vines</button>
        <button onClick={() => this.handleCat('6148e261a73b6d074a728574')}>Cacti</button>
        <button onClick={() => this.handleCat('')}>All</button>
        <PlantList plantListings={this.state.plantListings} activeCategory={this.state.activeCategory}/>

      </main>
    );
  }
}

export default Home;