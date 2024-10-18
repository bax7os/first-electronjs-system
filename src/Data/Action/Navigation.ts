import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Pages } from "Data/Objects/State.js";

export const setActivePage = createAction<Pages>("SET_ACTIVE_PAGE");