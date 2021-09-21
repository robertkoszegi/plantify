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
                <Navigation />
                <div>
                    Name: {this.state.data.name}
                    Watering Frequency? {this.state.data.waterFreq}
                    Sun Conditions? {this.state.data.sunCond}
                    $ {this.state.data.price}
                </div>
                {/* Add Cart Functionality here */}
                <button>Add to cart</button>
            </main>
        )
    }
}