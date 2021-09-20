import React, {Component} from 'react'

export default class PlantList extends Component {

    render(){
        return(
            <div className="PlantList">
                <h2>Plants</h2>
                    {this.props.plantListings.map(p =><div className="plantItems"><img src={p.img} style={{width:"100px"}} alt='plant'/><br /> {p.name} <br /> {p.waterFreq} <br /> {p.sunCond} <br /> {p.price}</div>)}
            </div>
      
          

        )

        }
}
  
  // Must export the component's function (or class)
 




  