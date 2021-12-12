import React from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <a href="#">Products</a>
            <button>yes</button>
        </nav>
    );
};

export default Navbar;