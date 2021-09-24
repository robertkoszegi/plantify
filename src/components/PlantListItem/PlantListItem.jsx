import React from 'react';
import { Link } from 'react-router-dom';

export default class PlantListItem extends React.Component{
    render(){
        return(
        <div className="PlantListItem">
            <Link to={{
                pathname:"/details",
                state:{
                    image:this.props.image,
                    name:this.props.name,
                    waterFreq:this.props.waterFreq,
                    sunCond:this.props.sunCond,
                    price:this.props.price,
                    petFriendly:this.props.petFriendly,
                    category:this.props.category
                }
                }}>
                <img src={`${this.props.image}`} alt={this.props.name} style={{width: 100}} /><br />
                {this.props.name}</Link>
            <div>
                {this.props.price}
            </div>
        </div>

        )

    }
}


