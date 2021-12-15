import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styles from "./ShopCart.module.css"

// component
import Cart from "./shared/Cart"

// context
import { CartContext } from "../context/CartContextProvider"

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext)

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.paymentFild}>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.total}$</p>

                    <div className={styles.btns}>
                        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                        <button onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
        </div>
    )
}

export default ShopCart