import React, { useRef } from "react";
import {fetchSearchCocktails} from "../redux/features/cocktailSlice";
import { useDispatch } from "react-redux";

import styles  from './SearchInput.module.css';

const SearchInput  = () => {
    const searchValue = useRef();
    const dispatch = useDispatch();

    const handlechange = () => {
        const searchText = searchValue.current.value;
        dispatch(fetchSearchCocktails({searchText}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className={styles.search}>
            <form  className={styles.search_form} onSubmit={handleSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Search Cocktail</label>
                    <input 
                        autoComplete="off" 
                        type="text" 
                        name="name" 
                        id="name" 
                        ref={searchValue}
                        onChange={handlechange} 
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchInput;