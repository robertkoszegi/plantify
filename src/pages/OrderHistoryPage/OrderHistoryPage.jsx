import React from 'react';
import Navigation from '../../components/Navigation/Navigation';


class OrderHistoryPage extends React.Component {
    state = {

    }


    render() {
        return(
            <main className="OrderHistoryPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>OrdersPage</h1>
            </main>
        )
    }

}

export default OrderHistoryPage;