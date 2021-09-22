

export default function PreviousOrdersItem(props) {
    console.log(props.order)
    return (
        <>
        
            <h3>{Date(props.order.createdAt)}</h3>
            <h3>item</h3>
            {/* <span>{props.order}</span> */}
        </>
        
    )
}