import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { HomeScreen } from "../screens/homeScreen";
import { TypeScreen } from "../screens/typeScreen";

export const RootNavigator = () =>{

    return <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/category/:type" element={<TypeScreen />} />
    </Routes>

    </BrowserRouter>
    </Provider>
}