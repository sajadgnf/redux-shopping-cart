import React from 'react';
import styles from "./Cart.module.css"
import { useDispatch } from 'react-redux';

// icon
import Trash from "../../assets/icons/trash.svg"

// function
import { shorten } from "../../helper/functions"

// catActions
import { removeItem, increase, decrease } from "../../redux/cart/cartAction"

const Cart = props => {

    const dispatch = useDispatch()

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
                    <button onClick={() => dispatch(decrease(props.data))}>-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))}><img src={Trash} alt='tash icon' /></button>
                }
                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;