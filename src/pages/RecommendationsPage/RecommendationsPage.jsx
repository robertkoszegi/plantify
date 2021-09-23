import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Recommendations.css'
import PlantList from '../../components/PlantList/PlantList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'


class RecommendationsPage extends React.Component {
    state = {
        plantListings: []
    }

    async componentDidMount() {
          try{
            let requestData = JSON.stringify(this.props.location.state);

            let requestHeaders = new Headers();
            requestHeaders.append('Content-Type', 'application/json');

            let fetchPlantsResponse = await fetch('/api/recommendations', {
                method: 'POST',
                headers: requestHeaders,
                body: requestData
            });
            if (!fetchPlantsResponse.ok) throw new Error("Could not fetch plants")
            let plants = await fetchPlantsResponse.json();

            this.setState({ plantListings: plants })
          } catch (err){
              console.log('Error:', err)
          }
      }


    render() {
        return(
            <main className="RecommendationsPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <Container>
                <div className="wrapper">
                    <Row>
                        <Col xs={12} md={10} l={6}>
                        <h2 className="recommendText">Based on your answers we recommend...</h2>
                        <div className="Recommendations">
                            {this.state.plantListings.length > 0 ?
                            <PlantList  plantListings={this.state.plantListings}/> :
                               <h2>No Matches Found. Browse our <Link to='/home'>collection.</Link></h2> 
                            }
                        </div>
                        </Col>
                    </Row>   
                </div>
                </Container>
            </main>
        )
    }

}

export default RecommendationsPage;

