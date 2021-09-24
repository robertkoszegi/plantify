import OrderLineItem from '../OrderLineItem/OrderLineItem';
import Button from 'react-bootstrap/Button'

function OrderDetails(props) {

  let todaysDate = (new Date()).toLocaleDateString()

  let orderArray = props.lineItems.map(i => <OrderLineItem lineItem={i} />)

  return (
    <div className='OrderDetails'>
      <h1>Your Current Order</h1>
      <div className='section-heading'>
          {orderArray.length > 0 ? 
          <><h2>TOTAL {props.cartTotal}</h2><br /></> 
          :
          <br />
          }
          {orderArray.length > 0 ?  
            orderArray 
            :
            <span className="no-orders">Your cart is empty</span>
          }
          {orderArray.length > 0 ?
          <><br /><Button onClick={()=>{props.handleCheckout()}}>Checkout</Button></>
            :
          <br />
          }
      </div>
    </div>
  );
}

export default OrderDetails;