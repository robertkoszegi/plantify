import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import CategoryItem from '../CategoryItem/CategoryItem'
// import './PlantList.css'



export default class CategoryList extends Component{
    
    render() {
        // create a category card for each in the array
        let catArray = this.props.plantCategories.map(cat => 
            <CategoryItem 
                handleCat={this.props.handleCat} 
                catName={cat.name} 
                catId={cat._id}
                catImg={cat.image}
            />)

        return (
            <>
                {catArray}
            </>
        )
    }
}


// TEMP
{/* <>
<button className="catButton palmButton" onClick={() => this.props.handleCat('6148e261a73b6d074a728570')}>Palms</button>
<button className="catButton fernButton"onClick={() => this.props.handleCat('6148e261a73b6d074a728572')}>Ferns</button>
<button className="catButton succulentButton"onClick={() => this.props.handleCat('6148e261a73b6d074a728571')}>Succulents</button>
<button className="catButton vineButton"onClick={() => this.props.handleCat('6148e261a73b6d074a728573')}>Vines</button>
<button className="catButton cactiButton"onClick={() => this.props.handleCat('6148e261a73b6d074a728574')}>Cacti</button>
<button className="catButton allButton"onClick={() => this.props.handleCat('')}>All</button>
</> */}