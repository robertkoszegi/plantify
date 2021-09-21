import React, {Component} from 'react'
import './PlantList.css'
import PlantListItem from '../PlantListItem/PlantListItem'

export default class PlantList extends Component {
    
    render(){
        if(this.props.activeCategory === ''){
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
        )
    }else if(this.props.activeCategory) {
            return(
                <div className="PlantList">
                  <h2>Plants</h2>

                   {this.props.plantListings.filter(plant =>
                        plant.category === this.props.activeCategory).map(p =>
                        <PlantListItem 
                        img={p.img}  
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

      