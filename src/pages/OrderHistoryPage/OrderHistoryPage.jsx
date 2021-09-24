import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PreviousOrdersList from '../../components/PreviousOrdersList/PreviousOrdersList'


class OrderHistoryPage extends React.Component {
    state = {
    }

    render() {
        return(
            <main className="OrderHistoryPage">
                <nav className="Navigation">
                    <Navigation setUserInState={this.props.setUserInState}/>
                </nav>
                <h1>OrdersPage</h1>
                <PreviousOrdersList />
            </main>
        )
    }

}

export default OrderHistoryPage;