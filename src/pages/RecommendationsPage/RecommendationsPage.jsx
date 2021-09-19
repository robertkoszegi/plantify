import React from 'react';
import Navigation from '../../components/Navigation/Navigation';


class RecommendationsPage extends React.Component {
    state = {

    }


    render() {
        return(
            <main className="RecommendationsPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>RecommendationsPage</h1>
            </main>
        )
    }

}

export default RecommendationsPage;