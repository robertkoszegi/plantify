import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class PlantList extends Component {

    render(){
        return(
            <div className="PlantList">
                <h2>Plants</h2>
                
                    {this.props.plantListings.map(p =><Link to='details/'><div className="plantItems"><img src={p.img} style={{width:"100px"}} alt='plant'/><br /> {p.name} <br /> {p.waterFreq} <br /> {p.sunCond} <br /> {p.price}</div></Link>)}
            </div>
      
          

        )

        }
}
  
  // Must export the component's function (or class)
 




  