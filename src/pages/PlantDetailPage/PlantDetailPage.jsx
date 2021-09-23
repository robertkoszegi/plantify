import React from 'react';
// import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation'
// import PlantListItem from '../../components/PlantListItem/PlantListItem';



export default class PlantDetailPage extends React.Component{
    state={
        data: this.props.location.state
    }
    componentDidMount(){
    }
    render(){
        return(
            <main className="PlantDetail">
                <Navigation setUserInState={this.props.setUserInState}/>
                <div>
                    <img src={`${this.state.data.image}`} alt={this.state.data.name} style={{width: 100}} /><br />
                    Name: {this.state.data.name} <br />
                    Watering Frequency: {this.state.data.waterFreq} <br />
                    Sun Conditions: {this.state.data.sunCond} <br />
                    $ {this.state.data.price}<br />
                    Pet Friendly: {this.state.data.petFriendly}<br />
                    Category: {this.state.data.category}
                </div>
                {/* Add Cart Functionality here */}
                <button onClick={()=>{this.props.handleAddToCart(this.state.data)}}>Add to cart</button>
                <button onClick={()=>{this.props.handleAddToWishlist(this.state.data)}}>Add to wishlist</button>
            </main>
        )
    }
}