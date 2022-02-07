import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// components
import Product from "./shared/Product"

// style
import styles from "./Store.module.css"

// redux
import { fetchProducts } from "../redux/products/productsAction"

// funcion
import { useTitle } from "../helper/functions"

const Store = () => {

    useTitle("Store")
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    }, [])

    const { products, loading, error } = productsState

    return (
        <div className={styles.container}>
            {
                loading ?
                    <p className='loading'></p> :
                    error ?
                        <p>Something went wrong</p> :
                        products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    )

}

export default Store