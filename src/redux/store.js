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
      removeFromBasket: (state, action) => {
        const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
        let newBasket = [...state.items]
        if(index >= 0) {
          newBasket.splice(index,1)
        } else {
          console.warn('error')
        }
        state.items = newBasket
      }
      
    }
  });
  
  export const { addToBasket, removeFromBasket } = basketSlice.actions;
  
  //Selectors
  export const selectItems = (state) => state.basket.items;
  export const selectTotal = (state) => state.basket.items.reduce((acc,item) => acc + item.price,0)

  // Global store setup
export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer
    }
});