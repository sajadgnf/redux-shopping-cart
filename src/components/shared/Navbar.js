import React, { useContext } from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

// icon
import shop from "../../assets/icons/shop.svg"

import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {
    const { state } = useContext(CartContext)
    return (
        <div className={styles.container}>
            <Link className={styles.productLink} to="/products">Products</Link>
            <div className={styles.shopCartIcon}>
                <p className={styles.counter}>{state.itemsCounter}</p>
                <Link to='/shopCart'><img src={shop} alt="shopCart icon" /></Link>
            </div>
        </div>
    );
};

export default Navbar;