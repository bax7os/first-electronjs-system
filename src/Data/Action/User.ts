import { getAuthToken } from "Data/Selectors/User.ts";
import {IAppUser, ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as UserAPI from "Data/API/User.js";
import { State } from "Data/Objects/State.ts";

export const loginUserAsync = createAsyncThunk<IAppUser, ILoginUserPayload, { state: State }>(
    "LOGIN_USER",
    async (payload: ILoginUserPayload, { getState }) => {
        return UserAPI.loginUser(payload, getAuthToken(getState())) as Promise<IAppUser>;
    }
);

export const registerUserAsync = createAsyncThunk<IAppUser, IRegisterUserPayload, { state: State }>(
    "REGISTER_USER",
    async (payload: IRegisterUserPayload, { getState }) => {
        return UserAPI.registerUser(payload, getAuthToken(getState())) as Promise<IAppUser>;
    }
);

