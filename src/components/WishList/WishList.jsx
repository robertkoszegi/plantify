import React from 'react';
import WishListItem from '../WishListItem/WishListItem';

export default function WishList(props) {

    return(
        <div className='wishDetails'>
            {props.wishLineItems.map(w => <WishListItem wishLineItems={w}/>)}

        </div>
    )    
}