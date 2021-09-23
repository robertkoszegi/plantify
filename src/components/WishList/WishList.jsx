import React from 'react';
import WishListItem from '../WishListItem/WishListItem';

export default function WishList(props) {
let wishlistArray = props.wishLineItems.map(w => <WishListItem removeWish={props.removeWish} wishLineItems={w}/>)
    return(
        <div className='wishDetails'>
            {wishlistArray.length > 0 ?
            wishlistArray
            :
            <span className="no-wishlist">Your wishlist is empty</span>
            }

        </div>

    )    

}