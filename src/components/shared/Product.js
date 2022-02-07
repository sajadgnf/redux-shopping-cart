import React from 'react';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

// style
import styles from "./Product.module.css"

// icon
import Trash from "../../assets/icons/trash.svg"

// functions
import { checkCart, shorten, quantityCount } from '../../helper/functions';

// cartActions
import { addItem, removeItem, increase, decrease } from '../../redux/cart/cartAction'


const Product = ({ productData }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cartState)

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='product' />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}$</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch(removeItem(productData))}><img className={styles.trashIcon} src={Trash} alt='trash-icon' /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        checkCart(state, productData.id) ?
                            <button onClick={() => dispatch(increase(productData))}>+</button> :
                            <button className={styles.addBtn} onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div >
    )
}

export default Product;