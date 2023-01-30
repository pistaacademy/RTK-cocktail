import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleCocktail } from '../redux/features/cocktailSlice';
import { Link, useParams } from 'react-router-dom';

const fetchSingleCocktail  = () => {
    const { cocktail, loading } = useSelector((state) => ({...state.app}));
    const [modifiedCocktail, setModifiedCocktail] = useState([]);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(()=> {
        dispatch(fetchSingleCocktail({ id }));
    },[id]);

    useEffect(()=> {
        if(cocktail.length > 0) {
            const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstruction: instaruction,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            } = cocktail[0];

            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
            const newCocktail = {
                name,
                image,
                info,
                category,
                glass,
                instaruction,
                ingredients
            };
            setModifiedCocktail(newCocktail)
        } else {
            setModifiedCocktail(null)
        }
    })
    return (
        <div>
            <h2>Single Cocktail</h2>
        </div>
    )
}

export default SingleCocktail;