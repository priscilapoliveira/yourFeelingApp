/**
 * @format
 */
import * as React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

const Main = () => <App />;

AppRegistry.registerComponent(appName, () => Main);
