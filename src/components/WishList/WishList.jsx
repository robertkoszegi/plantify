import React from 'react';
import WishListItem from '../WishListItem/WishListItem';

export default function WishList(props) {

    return(
        <div className='wishDetails'>
            {props.wishLineItems.map(w => <WishListItem handleAddToWishListDatabase={props.handleAddToWishListDatabase} handleAddToCart={props.handleAddToCart} removeWish={props.removeWish} wishLineItems={w}/>)}

        </div>

    )    

}