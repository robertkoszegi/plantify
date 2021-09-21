import React, {Component} from 'react'
import './PlantList.css'
import PlantListItem from '../PlantListItem/PlantListItem'

export default class PlantList extends Component {

    render(){
        return(
            <div className="PlantList">
                    {this.props.plantListings.map(p =>
                        <PlantListItem 
                        img={p.img}  
                        name={p.name} 
                        waterFreq={p.waterFreq} 
                        sunCond={p.sunCond} 
                        price={p.price}
                    />
                    )}  
            </div>
        )}}

      