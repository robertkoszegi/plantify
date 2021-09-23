
export default function OrderLineItem(props) {
    return (
        <div className="OrderLineItem">

            <div>Qty: {props.lineItem.qty}</div>
            <div>Name: {props.lineItem.item.name}</div>
            <div>Price: {props.lineItem.item.price}</div>
            <div>Watering Frequency: {props.lineItem.item.waterFreq}</div>
            <div>Sun Conditions: {props.lineItem.item.sunCond}</div>
            <div>Pet Friendly: {props.lineItem.item.petFriendly}</div>
            <div>Category: {props.lineItem.item.category}</div>

        </div>
    )
}