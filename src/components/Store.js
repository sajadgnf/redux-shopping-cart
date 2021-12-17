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

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container}>
            {products.map(product => <Product key={product.id} productData={product} />)}
        </div>
    )

}

export default Store