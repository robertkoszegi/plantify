import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./PlantListItem.css";

export default class PlantListItem extends React.Component{
    render(){
        return(
        <Card className="PlantListItem">

         <Card.Body>
         
           <Card.Text>
           <div><span><strong>{this.props.name}</strong></span></div>
           <Card.Img variant="top" src={`${this.props.image}`} style={{width: 100, height: 100}} />
           <div>${this.props.price}</div>
           </Card.Text>
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

                {/* <img src={`${this.props.image}`} alt={this.props.name} style={{width: 100}} /><br />
                {this.props.name}</Link> */}
                <Button variant="primary">More Details</Button></Link>

            
        </Card.Body>
        </Card>

        )

    }
}


// <Card style={{ width: '18rem' }}>
//  
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>