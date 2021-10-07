import React, {Component} from 'react'
import Card  from 'react-bootstrap/Card'


export default class CategoryItem extends Component{
    render() {
        return (
            <Card 
                className="text-center itemCard"
                style={{ 
                    width: '18rem', 
                    height: '22rem', 
                    backgroundImage:`url(${'/categoryImg/'+this.props.catImg})`,
                    backgroundSize: 'cover'
                }}>
                <Card.Text>{this.props.catName}</Card.Text>
                {/* <Card.Img src={`${"/categoryImg/"+this.props.catImg}`}  /> */}
            </Card>
        )
    }
}

