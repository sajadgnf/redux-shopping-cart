import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

// style
import styles from "./ProductDetails.module.css"


// funcion
import { useTitle } from '../helper/functions';

const ProductDetails = () => {

    useTitle("ProductDetails")

    const params = useParams()
    const id = params.id


    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    // get prudoct from api
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data)
                setLoading(false)
            })
    }, [])

    const { image, title, price, category, description } = product

    return (
        <>
            {
                loading ?
                    <p className='loading'></p> :
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
            }
        </>
    )
}

export default ProductDetails;