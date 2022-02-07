import React from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// icon
import shop from "../../assets/icons/shop.svg"

const Navbar = () => {

    const state = useSelector(state => state.cartState)

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