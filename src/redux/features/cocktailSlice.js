import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
    return fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res)=> res.json());
})

export const fetchSingleCocktail = createAsyncThunk("cocktails/fetchSingleCocktail", async ({id}) => {
    return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${id}`
    ).then((res)=> res.json());
})

const cocktailSlice = createSlice({
    name: "cocktails",
    initialState: {
        cocktails: [],
        cocktail: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.loadeing = true;
        },
        [fetchCocktails.fulfilled] : (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks;
        },
        [fetchCocktails.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [fetchSingleCocktail.pending]: (state, action) => {
            state.loadeing = true;
        },
        [fetchSingleCocktail.fulfilled] : (state, action) => {
            state.loading = false;
            state.cocktail = action.payload.drinks;
        },
        [fetchSingleCocktail.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default cocktailSlice.reducer;