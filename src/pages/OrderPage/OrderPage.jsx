import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import PrevOrdersList from '../../components/PreviousOrdersList/PreviousOrdersList';
// styling
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
            // let fetchOrdersResponse = await fetch('/api/orders')

          // uncomment this line below for extra error handling:
          // if (!fetchOrdersResponse.ok) throw new Error("Couldn't fetch orders")
          let orders = await fetchOrdersResponse.json(); // <------- convert fetch response into a js object
            
          // put into state
          console.log("orders", orders)
          this.setState({ orderHistory: orders})
        } catch (err) {
            console.error('ERROR:', err) // <-- log if error
        }
    }

    render() {
        return(
            <main className="OrderPage">
                <nav className="Navigation">
                    <Navigation />
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