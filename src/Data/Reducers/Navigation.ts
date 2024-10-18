import { setActivePage } from "Data/Action/Navigation";
import { createReducer, ActionReducerMapBuilder, PayloadAction, current } from "@reduxjs/toolkit";
import { NavigationState, Pages } from "Data/Objects/State.js";
import update from "immutability-helper";

const defaultState: NavigationState = {
    currentPage: Pages.LOGIN
};

const handleSetActivatePage = (state: NavigationState, action: PayloadAction<Pages>) => {
    if(!action?.payload){
        return state;
    }

    return update(state, {
        currentPage: {
            $set: action?.payload
        }
    });
}

const reducerBuilder = (builder: ActionReducerMapBuilder<NavigationState>) => {
    builder.addCase(setActivePage.type, handleSetActivatePage);
};

export default createReducer(defaultState, reducerBuilder);