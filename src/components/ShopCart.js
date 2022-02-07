import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// styles
import styles from "./ShopCart.module.css"

// component
import Cart from "./shared/Cart"

// cartActions
import { checkout as checkOut, clear } from "../redux/cart/cartAction"

// function
import { useTitle } from "../helper/functions"

const ShopCart = () => {

    useTitle("Cart")

    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartState)
    const { itemsCounter, selectedItems, total, checkout } = cartData

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                itemsCounter > 0 && <div className={styles.paymentFild}>
                    <p><span>Total Items: </span>{itemsCounter}</p>
                    <p><span>Total Payments: </span>{total}$</p>

                    <div className={styles.btns}>
                        <button onClick={() => dispatch(clear())}>Clear</button>
                        <button onClick={() => dispatch(checkOut())}>Check Out</button>
                    </div>
                </div>
            }
            {
                checkout && <div className={styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {
                !checkout && itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
        </div>
    )
}

export default ShopCart