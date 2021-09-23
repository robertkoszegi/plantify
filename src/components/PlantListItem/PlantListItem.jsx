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
                <img src={`${this.props.image}`} style={{width: 100}} /><br />
                {this.props.name}</Link>

                {/* Need to insert image tag here, will have to manually insert path into DB */}
            <div>{this.props.price}</div>
        </div>

        )

    }
}


