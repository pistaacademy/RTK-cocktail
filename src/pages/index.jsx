import React from "react";
import Header from "../components/Header";

import styles from './index.module.css';

const Home  = () => {
    return (
        <div className={styles.home}>
            <Header />
            <h2>Home</h2>
        </div>
    )
}

export default Home;