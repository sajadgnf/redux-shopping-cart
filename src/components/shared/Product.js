import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import styles from "./Product.module.css"
import Trash from "../../assets/icons/trash.svg"

// functions
import { checkCart, shorten, quantityCount } from '../../helper/functions';

// context
import { CartContext } from '../../context/CartContextProvider'

const Product = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext)

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.imgContainer}>
                    <img src={productData.image} alt='product' />
                </div>

                <div className={styles.content}>
                    <h3>{shorten(productData.title)}</h3>
                    <p>{productData.price}$</p>
                </div>

                <div className={styles.btns}>
                    <Link to={`/products/${productData.id}`}>Details</Link>
                    <div className={styles.buyBtns}>
                        {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({ type: 'DECREASE', payload: productData })}>-</button>}
                        {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })}><img className={styles.trashIcon} src={Trash} alt='trash-icon' /></button>}
                        {
                            checkCart(state, productData.id) ?
                                <button onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                                <button className={styles.addBtn} onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Product;