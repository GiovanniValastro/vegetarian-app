import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes', 
  async (endpoint) => {
    return await axios.get(endpoint)
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
  }
);

export const recipesSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipes: [],
    loading: null,
    search: "",
  },
  reducers: {
    setRecipe: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.loading = true
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.loading = false
      state.recipes = action.payload
    },
    [getRecipes.rejected]: (state) => {
      state.loading = false
    }
  },
});

export const { setRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;