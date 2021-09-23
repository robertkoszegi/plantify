import React, {Component} from 'react'
import PlantListItem from '../PlantListItem/PlantListItem'
import './PlantList.css'

export default class PlantList extends Component {
    
    render(){
        if(this.props.activeCategory){
            return(
                <div className="PlantList">
                   {this.props.plantListings.filter(plant =>
                        plant.category === this.props.activeCategory).map(p =>
                        <PlantListItem 
                        key={p.name}
                        image={p.image}  
                        name={p.name} 
                        waterFreq={p.waterFreq} 
                        sunCond={p.sunCond} 
                        price={p.price}
                        />
                    )}  
                </div>
            )
        } else {
            return(
            <div className="PlantList">
                {this.props.plantListings.map(p =>
                    <PlantListItem 
                    key={p.name}
                    image={p.image}  
                    name={p.name} 
                    waterFreq={p.waterFreq} 
                    sunCond={p.sunCond} 
                    price={p.price}
                />
                )}  
            </div>  
            )      
        }
    }
}