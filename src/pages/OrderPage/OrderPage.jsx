import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import PrevOrdersList from '../../components/PreviousOrdersList/PreviousOrdersList';


class OrderPage extends React.Component {
    
    state = {
        // orderHistory:["order1","order2"]
        orderHistory:[]
    }
    
    async componentDidMount() {
        try {
            // let jwt = localStorage.getItem('token')
            // let fetchOrdersResponse = await fetch('/api/orders', {headers: {'Authorization': 'Bearer ' + jwt}})
            let fetchOrdersResponse = await fetch('/api/orders')

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
                <h1>Order Details</h1>
                <h3>{this.props.lineItems.length}</h3> {/* Temp */}
                <OrderDetails lineItems={this.props.lineItems} paid={this.props.paid}/>
                <button onClick={()=>{this.props.handleCheckout()}}>Checkout</button>

                <br />
                <br />
                <h1>Order History</h1>
                <PrevOrdersList orderHistory={this.state.orderHistory}/>
            </main>
        )
    }
}

export default OrderPage;