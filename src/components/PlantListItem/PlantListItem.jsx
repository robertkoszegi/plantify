import React from 'react';
import { Link } from 'react-router-dom';

export default class PlantListItem extends React.Component{
    render(){
        return(
        <div clasName="PlantListItem">
            <Link to={{
                pathname:"/details",
                state:{
                    name:this.props.name,
                    waterFreq:this.props.waterFreq,
                    sunCond:this.props.sunCond,
                    price:this.props.price,

                }
                }}>Name{this.props.name}</Link>
                {/* Need to insert image tag here, will have to manually insert path into DB */}
            <div>{this.props.price}</div>
        </div>

        )

    }
}


