import { configureStore } from "@reduxjs/toolkit";
import basketReducer from '..slices/basketReducer';

// Global store setup
export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
});