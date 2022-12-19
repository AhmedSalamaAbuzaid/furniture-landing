import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "./product";


function ProductDetails () {
    const apiUrl = "https://dummyjson.com/products" ;
    const params = useParams();
    const [product, setProduct] = useState({})

    // use effect due fetching
    useEffect(()=> {
        fetch(`${apiUrl}/${params.productId}`)
        .then(res => res.json())
        .then(product => setProduct(product))
    },[])

    return(
        <Product product={product} showbtn={false}/>
    )
}

export default ProductDetails