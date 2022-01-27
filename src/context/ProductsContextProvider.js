import React, { useEffect, useState, createContext } from 'react'

// API
import { getProducts } from "../services/api"

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
            setLoading(false)
        }

        fetchAPI()
    }, [])

    return (
        <ProductsContext.Provider value={{products, loading}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider