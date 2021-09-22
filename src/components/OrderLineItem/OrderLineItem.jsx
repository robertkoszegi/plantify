
export default function OrderLineItem(props) {
    return (
        <div className="OrderLineItem">
            <div>{props.lineItem.qty}</div>
            <div>{props.lineItem.item.name}</div>
            <div>{props.lineItem.item.price}</div>
        </div>
    )
}