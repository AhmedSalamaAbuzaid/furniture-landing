import {useState ,useEffect} from 'react';
function Cart (props) {
    
    const[items,setItems] = useState(0)

    useEffect(() => {
        setItems(props.add)
    },[])
    return(
        <>
        <i className="bi bi-cart-fill"></i>
        <span>{items}</span>
        </>
    )
}
export default Cart