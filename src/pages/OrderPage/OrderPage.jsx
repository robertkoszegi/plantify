import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import PrevOrdersList from '../../components/PreviousOrdersList/PreviousOrdersList';
import Card from 'react-bootstrap/Card'
import './OrderPage.css'

class OrderPage extends React.Component {
    
    state = {
        orderHistory:[]
    }
    
    async componentDidMount() {
        try {
            let jwt = localStorage.getItem('token')
            let fetchOrdersResponse = await fetch('/api/orders', {headers: {'Authorization': 'Bearer ' + jwt}})
            let orders = await fetchOrdersResponse.json(); 

            this.setState({ orderHistory: orders})
        } catch (err) {
            console.error('ERROR:', err) 
        }
    }

    render() {
        return(
            <main className="OrderPage">
                <nav className="Navigation">
                <Navigation setUserInState={this.props.setUserInState}/>
                </nav>
                <div className="content">
                    <Card className="orderBlock">
                        <Card.Body>
                        <OrderDetails 
                            lineItems={this.props.lineItems} 
                            paid={this.props.paid}
                            cartTotal={this.props.cartTotal}
                            handleCheckout={this.props.handleCheckout}
                        />
                        </ Card.Body>
                    </Card>
   
                    <Card className="orderBlock">
                        <Card.Body>
                            <PrevOrdersList orderHistory={this.state.orderHistory}/>
                        </Card.Body>
                    </Card>
                </div>
            </main>
        )
    }
}

export default OrderPage;