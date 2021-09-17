import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class PlantList extends Component {
    state = [{
        name: 'Chinese Fan Palm', 
        price: 39.99,
        waterFreq: 'Medium',
        sunCond: 'Full Sun',
        petFriendly: true,
        img: './chinesepalm.jpg'
    },
    {
        name: 'Areca Palm', 
        price: 30.99,
        waterFreq:'Medium',
        sunCond:'Full Sun',
        petFriendly:true,
        img: './arecapalm.jpg'
    },
    {
        name: 'Majesty Palm', 
        price: 30.99,
        waterFreq:'Medium',
        sunCond:'Full Sun',
        petFriendly:true,
        img: './majestypalm.jpg'
    },
    
    
    ];
    render(){
        return(
            <div className="PlantList">
                <h2>Plants</h2>
                    {this.state.map(p =><Link to='details/'><div className="plantItems"><img src={p.img} style={{width:"100px"}}/><br /> {p.name} <br /> {p.waterFreq} <br /> {p.sunCond} <br /> {p.price}</div></Link>)}
            </div>
      
          

        )

        }
}
  
  // Must export the component's function (or class)
 




  