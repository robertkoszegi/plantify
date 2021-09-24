import React from 'react'
import './HomePage.css'
import PlantList from '../../components/PlantList/PlantList';
import Banner from '../../components/Banner/Banner';
import Navigation from '../../components/Navigation/Navigation';

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
  }
  
  render() {
    return (
      <main className="HomePage">
        <nav className="Navigation">
          <Navigation setUserInState={this.props.setUserInState}/>
        </nav>
        <Banner />
        <button className="catButton palmButton" onClick={() => this.handleCat('6148e261a73b6d074a728570')}>Palms</button>
        <button className="catButton fernButton"onClick={() => this.handleCat('6148e261a73b6d074a728572')}>Ferns</button>
        <button className="catButton succulentButton"onClick={() => this.handleCat('6148e261a73b6d074a728571')}>Succulents</button>
        <button className="catButton vineButton"onClick={() => this.handleCat('6148e261a73b6d074a728573')}>Vines</button>
        <button className="catButton cactiButton"onClick={() => this.handleCat('6148e261a73b6d074a728574')}>Cacti</button>
        <button className="catButton allButton"onClick={() => this.handleCat('')}>All</button>
        <PlantList plantListings={this.state.plantListings} activeCategory={this.state.activeCategory}/>
      </main>
    );
  }
}

export default Home;