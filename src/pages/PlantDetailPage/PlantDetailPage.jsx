import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation'
import './PlantDetailPage.css'


export default class PlantDetailPage extends React.Component{
    state={
        data: this.props.location.state
    }
    componentDidMount(){
    }
    render(){
        return(

            <div className="wrapperDetail">
                <Navigation setUserInState={this.props.setUserInState} />
                    <main className="plantDetail">
                        <div className="plantInfo">
                            <Link to="/home">Back</Link><br />
                            <img src={`${this.state.data.image}`} style={{width: 100}} /><br />
                            <h1> {this.state.data.name} </h1> <br />
                            Watering Frequency: {this.state.data.waterFreq} <br />
                            Sun Conditions: {this.state.data.sunCond} <br />
                            $ {this.state.data.price}<br />
                            Pet Friendly: {this.state.data.petFriendly ? 'Yes' : 'No'}<br />
                            <button className="detailButton" onClick={()=>{this.props.handleAddToCart(this.state.data)}}>Add to cart</button>
                            <button className="detailButton" onClick={()=>{this.props.handleAddToWishlist(this.state.data)}}>Add to wishlist</button>
                        </div>
                    </main>
            </div>
        )
    }
}