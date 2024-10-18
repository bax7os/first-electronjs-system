import { configureStore } from "@reduxjs/toolkit";
import userReducer from "Data/Reducers/User";
import navReducer from "Data/Reducers/Navigation";


const reducerMap = {
    User: userReducer,
    Navigation: navReducer
};

export const store = configureStore({
    reducer: reducerMap
});