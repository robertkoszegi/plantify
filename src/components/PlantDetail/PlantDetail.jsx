import React, {Component} from 'react'
import './PlantDetail.css'

export default class PlantDetail extends Component {
    state = {
        plantDetails:[],
    }

    render(){
        return(
            <div className="PlantDetail">
                <h1>{this.state.plantDetails._id}</h1>
             </div>
      
          

        )

        }
}
  
  // Must export the component's function (or class)
 




  