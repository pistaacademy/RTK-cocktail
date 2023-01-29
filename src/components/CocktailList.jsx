import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCocktails } from '../redux/features/cocktailSlice';
import { Link } from 'react-router-dom';

const CocktailList = () => {

    const { cocktails, loading } = useSelector((state) => ({...state.app}));
    const [modifiedCocktail, setModifiedCocktail] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCocktails());
    },[]);

    useEffect(()=>{
        if(cocktails) {
            const newCocktails = cocktails.map((item)=>{
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                }
            });
            setModifiedCocktail(newCocktails);
        } else {
            setModifiedCocktail([]);
        }
    },[cocktails]);

    
    return (
        <div>
            <h1>Cocktail List</h1>
        </div>
    )
}

export default CocktailList;