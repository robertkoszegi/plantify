import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation'

class PlantDetail extends React.Component{

    render(){
        return(
            <main className="PlantDetail">
                <Navigation />
                <div>
                    <img src="./majestypalm.jpg" alt="" />
                </div>
            </main>
        )
    }
}