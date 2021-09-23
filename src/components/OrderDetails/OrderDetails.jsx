import OrderLineItem from '../OrderLineItem/OrderLineItem';
import Button from 'react-bootstrap/Button'

function OrderDetails(props) {
  // this is a normal javascript comment intended to inform you that
  // you can do calculations and declare variables above the return statement!
  let todaysDate = (new Date()).toLocaleDateString()

  // calculate the total cart price by iterating over all the lineitems
  // let totalCartPrice = 0;
  // for (let l of props.lineItems) {
  //   totalCartPrice += l.item.price * l.qty
  // }


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
        {/* <span >{props.paid === true ? "Paid" : ""}</span> */}
      </div>
      <div >
        {/* {props.lineItems.map(i => <OrderLineItem lineItem={i} />)} */}
        <section className="total">
          {/* <button onClick={()=>{props.handleCheckout()}}>CHECKOUT</button> */}
          {/* <span>${totalCartPrice.toFixed(2)}</span> */}
        </section>
        <Button onClick={()=>{this.props.handleCheckout()}}>Checkout</Button>
      </div>
    </div>
  );
}

export default OrderDetails;