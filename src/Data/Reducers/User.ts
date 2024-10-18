import { IAppUser } from "Interfaces/User.ts";
import { createReducer, ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "Data/Objects/State.ts";
import update from "immutability-helper";
import { loginUserAsync } from "Data/Action/User.ts";


const defaultState: UserState = {
    token: "",
    currentUser: undefined
};

const handleLoginUserAsync = (state: UserState, action: PayloadAction<IAppUser>) => {
    if (action?.payload){
        return state;
    }

    const { user, token } = action?.payload;

    return update(state, {
        currentUser: {
            $set: user
        },
        token: {
            $set: token
        },
});
}

const reduceBuilder = (builder: ActionReducerMapBuilder<UserState>) => {
    builder.addCase(loginUserAsync.fulfilled, handleLoginUserAsync);
};

export default createReducer(defaultState, reduceBuilder);