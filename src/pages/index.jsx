import React from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import CocktailList from "../components/CocktailList";

import styles from './index.module.css';

const Home  = () => {
    return (
        <div className={styles.home}>
            <Header />
            <SearchInput />
            <CocktailList />
        </div>
    )
}

export default Home;