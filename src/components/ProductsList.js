
import { useEffect, useState } from "react";
import Product from "./product"
import './ProductsList.css'
function ProductsList () {

    const apiUrl = "https://dummyjson.com/products";
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const fetchProduct = () => {
        fetch(apiUrl)
        .then((response)=> response.json())
        .then(data =>  setProducts(data.products))
    }
    const fetchCategories = () => {
        fetch(`${apiUrl}/categories`)
        .then((response)=> response.json())
        .then(categories =>  setCategories(categories))
    }
    const getProductInCategry = (cate) => {
        console.log(cate)
        fetch(`${apiUrl}/category/${cate}`)
        .then((response)=> response.json())
        .then(categories =>  setProducts(categories.products))
    }

    useEffect(()=>{
        fetchProduct()
        fetchCategories()
    },[])

    const product = products.map(product => {
        return <Product key={product.id} product={product}
        showbtn={true}
        />
    })

    return( 
        <>
        <h2 className="text-center text-red">Our Products</h2>
        <div className="container">
            <button className="btn btn-primary">All Products</button>
            {categories.map(category => {
                return <button key={category} onClick={()=> {
                    getProductInCategry(category)
                }} className="btn btn-primary">{category}</button>
            })
            }
            <div className="row">
                    {product}
            </div>
        </div>
        </>
    )
}

export default ProductsList