import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
    return fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res)=> res.json());
})

