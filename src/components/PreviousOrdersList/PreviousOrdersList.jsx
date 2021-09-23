import React from 'react';
import './PreviousOrdersList.css'
import PreviousOrdersItem from '../PreviousOrdersItem/PreviousOrdersItem';

export default function PrevOrdersList(props) {
    

    let orderHistoryArray = props.orderHistory.map( o => <PreviousOrdersItem order={o} />)

    return(
        <main className="PrevOrdersList">
            {/** is there more than one order in the order history? okay then display it */}
            {orderHistoryArray.length > 0 ?
            orderHistoryArray
            :
            <span className="no-orders">No Previous Orders</span>
            }
        </main>

    )


    

}