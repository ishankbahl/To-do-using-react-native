import React from "react";
import { AppRegistry } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./todoListRedux";
import App from "./components/App";

const store = createStore(reducer);

const myappWithStore=()=>(
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent("myapp",()=>myappWithStore);