import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation'

export default class PlantDetailPage extends React.Component{
    state={
        plantDetail:[]
    }

    render(){
        return(
            <main className="PlantDetail">
                
                <div>
                    <img src="./majestypalm.jpg" alt="" />
                </div>
            </main>
        )
    }
}