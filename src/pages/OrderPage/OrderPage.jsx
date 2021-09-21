import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import OrderDetails from '../../components/OrderDetails/OrderDetails';


class OrderPage extends React.Component {

    render() {
        return(
            <main className="OrderPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>Order Details</h1>
                <h3>{this.props.lineItems.length}</h3>
                <OrderDetails lineItems={this.props.lineItems}/>
                <button>Checkout</button>
            </main>
        )
    }
}

export default OrderPage;