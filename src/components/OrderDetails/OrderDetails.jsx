import OrderLineItem from '../OrderLineItem/OrderLineItem';

function OrderDetails(props) {
  // this is a normal javascript comment intended to inform you that
  // you can do calculations and declare variables above the return statement!
  let todaysDate = (new Date()).toLocaleDateString()

  // calculate the total cart price by iterating over all the lineitems
  let totalCartPrice = 0;
  for (let l of props.lineItems) {
    totalCartPrice += l.item.price * l.qty
  }

  return (
    <div className='OrderDetails'>
        <div className='section-heading'>
            <span >YOUR ORDER</span><br />
            <span >{todaysDate}</span>
            <span >{props.paid === true ? "Paid" : "Unpaid"}</span>
        </div>
        <div >
            {props.lineItems.map(i => <OrderLineItem lineItem={i} />)}
            <section className="total">
                {/* <button onClick={()=>{props.handleCheckout()}}>CHECKOUT</button> */}
                <span>${totalCartPrice.toFixed(2)}</span>
            </section>
        </div>
    </div>
  );
}

export default OrderDetails;