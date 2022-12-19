import { Link } from "react-router-dom";

function Product (props) {
    const {product, showbtn} = props;
    
    return(
        <>
        <div className="col-3" key={product.id}>
            <div className="card text-red" >
                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>Price: {product.price}$</p>
                    <div className="wrap-btns">
                    <button className="btn btn-primary" >Add To Cart + </button>
                    {showbtn&&<Link className="btn btn-primary details" to={`/product/${product.id}`}>Details</Link>}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Product