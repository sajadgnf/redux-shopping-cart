import React, { useContext } from "react"
import { ProductsContext } from "../context/ProductsContextProvider"
const Cart = () => {
    const data = useContext(ProductsContext)
    const product = data[1]
    return (
        <div>
            {product.title}
        </div>
    )
}

export default Cart