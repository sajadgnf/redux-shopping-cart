import React, { useContext } from "react"

// components
import Product from "./shared/Product"

// style
import styles from "./Store.module.css"

// context
import { ProductsContext } from "../context/ProductsContextProvider"

// funcion
import { useTitle } from "../helper/functions"

const Store = () => {

    useTitle("Store")



    const { products, loading } = useContext(ProductsContext)

    return (
        <div className={styles.container}>
            {
                loading ?
                    <p className={styles.loading}></p> :
                    products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    )

}

export default Store