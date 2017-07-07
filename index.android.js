import React from "react";
import {AppRegistry} from "react-native";
import { createStore } from "redux";
import { reducer } from "./todoListRedux";
import App from "./components/App";

const store = createStore(reducer);

const myappWithStore=()=><App store={store} />

AppRegistry.registerComponent("myapp",()=>myappWithStore);