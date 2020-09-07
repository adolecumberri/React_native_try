import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { K9Context, K9Provider } from "./config/User/user.context";

import AppContainer from "./navigation";
//ejemplo de uso del contexto
// const [state, setState] = useContext(K9Context);
export default function App() {
  return (
    <K9Provider>
      <AppContainer />
    </K9Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
