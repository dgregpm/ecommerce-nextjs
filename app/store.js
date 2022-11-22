import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        // Actions
      addToBasket: (state, action) => {
        state.items = [...state.items, action.payload]
      },
      removeFromBasket: (state, action) => { }
    }
  });
  
  export const { addToBasket, removeFromBasket } = basketSlice.actions;
  
  //Selectors
  export const selectItems = (state) => state.basket.items;

  // Global store setup
export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer
    }
});