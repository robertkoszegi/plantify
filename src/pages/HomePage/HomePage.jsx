import React from 'react'
import './HomePage.css'
import PlantList from '../../components/PlantList/PlantList';
import Banner from '../../components/Banner/Banner';
import Navigation from '../../components/Navigation/Navigation';
import CategoryList from '../../components/CategoryList/CategoryList';

class Home extends React.Component {
  state = {
    plantCategories: [],
    plantListings:[],
    activeCategory: "",
    menuItems: [],
    categoryItems:[],
  }

  handleCat = (activeCategory) =>{
    this.setState({activeCategory});
}

  async componentDidMount() {
    try{
      let jwt = localStorage.getItem('token')
      let fetchPlantsResponse = await fetch('/api/plantList', {headers: {'Authorization': 'Bearer ' + jwt}})
      let fetchCatsResponse = await fetch('/api/plantList/categories')
      let plants = await fetchPlantsResponse.json()
      let cats = await fetchCatsResponse.json()
      if (!fetchPlantsResponse.ok) throw new Error("Could not fetch plants")
      if (!fetchCatsResponse.ok) throw new Error("Could not fetch categories")
      this.setState({ plantListings: plants, plantCategories: cats })
    } catch (err){
      console.log('Error:', err)
    }
    // Test
    console.log("plantCategories", this.state.plantCategories)
  }
  
  render() {
    return (
      <main className="HomePage">
        <nav className="Navigation">
          <Navigation setUserInState={this.props.setUserInState}/>
        </nav>
        <Banner />
        <CategoryList handleCat={this.handleCat} plantCategories={this.state.plantCategories} />
        <PlantList plantListings={this.state.plantListings} activeCategory={this.state.activeCategory}/>
      </main>
    );
  }
}

export default Home;