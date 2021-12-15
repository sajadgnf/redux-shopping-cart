import React, { useContext } from 'react';
import styles from "./Cart.module.css"

// icon
import Trash from "../../assets/icons/trash.svg"

// function
import { shorten } from "../../helper/functions"

// context
import { CartContext } from '../../context/CartContextProvider';

const Cart = props => {

    const { dispatch } = useContext(CartContext)

    const { image, title, quantity, price } = props.data

    return (
        <div className={styles.container}>
            <img src={image} alt="product" />
            <div className={styles.details}>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.btns}>

                {quantity > 1 ?
                    <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button> :
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}><img src={Trash} alt='tash icon' /></button>
                }
                <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
            </div>
        </div>
    );
};

export default Cart;