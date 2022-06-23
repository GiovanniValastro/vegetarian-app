import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './users/recipesSlice';

export const store = configureStore({
  reducer:{
    recipes: recipesReducer, 
  }, 
});

