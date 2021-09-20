import React, {Component} from 'react'
import PlantListItem from '../PlantListItem/PlantListItem'

export default class PlantList extends Component {
    
    render(){
        <main>
        
        </main>
        if(this.props.activeCategory === ''){
        return(
            this.props.plantListings.map(p =>
                <PlantListItem 
                img={p.img}  
                name={p.name} 
                waterFreq={p.waterFreq} 
                sunCond={p.sunCond} 
                price={p.price}
            />
            )  
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

      