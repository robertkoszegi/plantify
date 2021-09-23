import React from 'react';

export default function WishHistory(props) {
let historyArray = props.wishHistory.map(w => <p>{w.wishLineItems.item.name}</p> )
    return(
        <div className='wishDetails'>
            {historyArray.length > 0 ?
            historyArray
            :
            <span className="no-wishlist">Your wishlist is empty</span>
            }

        </div>

    )    

}