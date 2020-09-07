import React, { useContext, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../views/Home";
import WifiSearch from "../components/WifiSearch";
import SSIDConfig from "../components/SSIDConfig";
import Login from "../components/Login";

import { Ionicons } from "@expo/vector-icons";
import TimePicker from "../components/TimePicker";

const { Navigator, Screen } = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AppContainer = () => {
  const [timeSearching, setTimeSearching] = useState<number>(-1);

  return (
    <NavigationContainer>
      <Navigator initialRouteName="login">
        <Screen
          name="config"
          component={SSIDConfig}
          options={({
            navigation,
            route,
          }: {
            navigation: any;
            route: any;
          }) => ({
            title: "¿Dispositivo buscado?",
            headerLeft: () => <View></View>,
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#297050" },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("config")}>
                <Ionicons
                  name="ios-settings"
                  size={32}
                  style={{ marginRight: 16, color: "white" }}
                  color="black"
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Screen
          name="login"
          options={({
            navigation,
            route,
          }: {
            navigation: any;
            route: any;
          }) => ({
            title: "Login K9",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#297050" },
            // headerRight: () => (
            //   <Button
            //     onPress={() => navigation.navigate("config")}
            //     title="Prueba"
            //     color="#000"
            //   />
            // ),
          })}
        >
          {(props) => {
            return <Login {...props} />;
          }}
        </Screen>

        <Screen
          name="scanner"
          options={({
            navigation,
            route,
          }: {
            navigation: any;
            route: any;
          }) => ({
            title: "Komobi K9",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#297050" },
            headerLeft: () => <View></View>,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("config")}>
                <Ionicons
                  name="ios-settings"
                  size={32}
                  style={{ marginRight: 16, color: "white" }}
                  color="black"
                />
              </TouchableOpacity>
            ),
          })}
        >
          {(props) => {
            return <WifiSearch {...props} timeSearching={timeSearching} />;
          }}
        </Screen>

        <Screen
          name="scannerConfig"
          options={({
            navigation,
            route,
          }: {
            navigation: any;
            route: any;
          }) => ({
            title: "Komobi K9",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#297050" },
            headerLeft: () => <View></View>,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("config")}>
                <Ionicons
                  name="ios-settings"
                  size={32}
                  style={{ marginRight: 16, color: "white" }}
                  color="black"
                />
              </TouchableOpacity>
            ),
          })}
        >
          {(props) => {
            return (
              <TimePicker {...props} setTimeSearching={setTimeSearching} />
            );
          }}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
