import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Recommendations.css'

class RecommendationsPage extends React.Component {
    state = {
        // drill recommendations to populate recco div
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
                        {/* {this.props.recommendations.map}(p =>
                            <div className="plantItems">
                            <img src={p.img} 
                            style={{width:"100px"}} 
                            alt='plant'/><br /> 
                            {p.name} <br /> 
                            {p.waterFreq} <br /> 
                            {p.sunCond} <br /> 
                            {p.price}</div>)} */}
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