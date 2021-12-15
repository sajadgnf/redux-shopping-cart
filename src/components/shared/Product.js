import React, { useContext } from 'react';
import { Link } from "react-router-dom"

// style
import styles from "./Product.module.css"

// icon
import Trash from "../../assets/icons/trash.svg"

// functions
import { checkCart, shorten, quantityCount } from '../../helper/functions';

// context
import { CartContext } from '../../context/CartContextProvider'

const Product = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext)

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='product' />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}$</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({ type: 'DECREASE', payload: productData })}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })}><img className={styles.trashIcon} src={Trash} alt='trash-icon' /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        checkCart(state, productData.id) ?
                            <button onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button className={styles.addBtn} onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</button>
                    }
                </div>
            </div>
        </div >
    )
}

export default Product;