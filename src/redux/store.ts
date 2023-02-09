import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

const reducer = {
    app:appSlice
}

export const store = configureStore({
    reducer
})