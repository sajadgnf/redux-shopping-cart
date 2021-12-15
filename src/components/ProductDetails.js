import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

// style
import styles from "./ProductDetails.module.css"

// context
import { ProductsContext } from "../context/ProductsContextProvider"

const ProductDetails = () => {

    const params = useParams()
    const id = params.id
    const data = useContext(ProductsContext)
    const product = data[id - 1]
    
    // get prudoct from api
    // const [product, setProduct] = useState({})
    // useEffect(() => {
    //     axios.get(`https://fakestoreapi.com/products/${id}`)
    //     .then(response => setProduct(response.data))
    //     
    // },[])
    
    const { image, title, price, category, description } = product

    return (
        <div className={styles.container}>

            <img src={image} alt='product' />
            <div className={styles.details}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}$</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;