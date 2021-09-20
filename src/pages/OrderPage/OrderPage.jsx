import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import OrderDetails from '../../components/OrderDetails/OrderDetails';


class OrderPage extends React.Component {
    state = {

    }

    handleCheckout() {

    }


    render() {
        return(
            <main className="OrderPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>Order Details</h1>
                <OrderDetails />
                <button onClick={()=>this.handleCheckout()}>Checkout</button>
            </main>
        )
    }

}

export default OrderPage;