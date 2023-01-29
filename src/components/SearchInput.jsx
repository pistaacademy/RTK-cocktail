import React, { useRef } from "react";

import styles  from './SearchInput.module.css';

const SearchInput  = () => {
    const searchValue = useRef();
    return (
        <section className={styles.search}>
            <form  className={styles.search_form}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Search Cocktail</label>
                    <input autoComplete="off" type="text" name="name" id="name" ref={searchValue} />
                </div>
            </form>
        </section>
    )
}

export default SearchInput;