import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Recommendations.css'
import PlantList from '../../components/PlantList/PlantList';

class RecommendationsPage extends React.Component {
    state = {
        plantListings: []
    }

    async componentDidMount() {
          try{
            let requestData = JSON.stringify(this.props.location.state);

            let requestHeaders = new Headers();
            requestHeaders.append('Content-Type', 'application/json');

            let fetchPlantsResponse = await fetch('/api/recommendations', {
                method: 'POST',
                headers: requestHeaders,
                body: requestData
            });
            if (!fetchPlantsResponse.ok) throw new Error("Could not fetch plants")
            let plants = await fetchPlantsResponse.json();

            this.setState({ plantListings: plants })
          } catch (err){
              console.log('Error:', err)
          }
      }


    render() {
        return(
            <main className="RecommendationsPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <div className="wrapper">
                    <h2>Based on your answers we recommend...</h2>
                    <div className="Recommendations">
                        <h3>Your Plant Picks!</h3>
                        <PlantList  plantListings={this.state.plantListings}/>
                        
                    </div>
                    <div className="seeMore">
                        <p>Save your preferences, build a wishlist, review pas orders and recieve ongoing plant care support by signing up with us</p>
                        <button>See More</button>
                    </div>
                    <button>Sign Up</button>
                </div>
            </main>
        )
    }

}

export default RecommendationsPage;