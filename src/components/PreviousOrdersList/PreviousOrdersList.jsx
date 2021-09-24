import React from 'react';
import './PreviousOrdersList.css'
import PreviousOrdersItem from '../PreviousOrdersItem/PreviousOrdersItem';

export default function PrevOrdersList(props) {
    
    let orderHistoryArray = props.orderHistory.map( o => <PreviousOrdersItem order={o} />)

    return(
        <main className="PrevOrdersList">
            <h1>Order History</h1>
            {orderHistoryArray.length > 0 ?
            orderHistoryArray
            :
            <span className="no-orders">No Previous Orders</span>
            }
        </main>

    )


    

}