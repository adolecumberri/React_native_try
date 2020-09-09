import React, { useState, FC, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormInput from "../components/FormInput";

import ErrorMessage from "../components/ErrorMessage";
import AppLogo from "../components/AppLogo";
import KShield from "./icons/KShield";

import { K9Context } from "../config/User/user.context";

interface IProps {
  navigation: any;
}

const Login: FC<IProps> = ({ navigation }) => {
  const [rightIcon, setRightIcon] = useState("ios-eye");
  const [errors, setErrors] = useState({ email: "", password: "", login: "" });
  const [values, setValues] = useState({ email: "", password: "" });

  //Context
  const [_, setContext] = useContext(K9Context);

  const handleOnLogin = async () => {
    setTimeout(
      () => {
        if (values.email.includes("e")) {
          setErrors({
            email: "",
            password: "",
            login: "Email o Password incorrectos",
          });
        } else {
          setContext({
            user: { email: values.email },
            searchedId: "",
          });
          navigation.navigate("config");
        }
      },

      1000
    );
  };

  const handleEmail = (e: any) => {
    setValues({ email: e, password: values.password });
  };
  const handleEmailError = (e: any) => {
    if (values.email == "") {
      setErrors({
        email: "Debe escribir su email para logearse",
        password: errors.password,
        login: errors.login,
      });
    }
  };

  const handlePassword = (e: any) => {
    setValues({ email: values.email, password: e });
  };

  const handlePasswordError = (e: any) => {
    if (values.password == "") {
      setErrors({
        email: errors.email,
        password: "Debe escribir una password para poder logearse",
        login: errors.login,
      });
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <>
          <View style={styles.kshieldContainer}>
            <KShield />
          </View>
          <FormInput
            name="email"
            value={values.email}
            onChangeText={handleEmail}
            placeholder="Enter email"
            autoCapitalize="none"
            iconName="ios-mail"
            iconColor="#2C384A"
            onBlur={handleEmailError}
          />
          {values.email === "" && <ErrorMessage errorValue={errors.email} />}

          <FormInput
            name="password"
            value={values.password}
            onChangeText={handlePassword}
            placeholder="Enter password"
            secureTextEntry={rightIcon === "ios-eye" ? true : false}
            iconName="ios-lock"
            iconColor="#2C384A"
            onBlur={handlePasswordError}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setRightIcon(
                    rightIcon === "ios-eye" ? "ios-eye-off" : "ios-eye"
                  )
                }
              >
                <Ionicons name={rightIcon} size={28} color="grey" />
              </TouchableOpacity>
            }
          />
          {values.password === "" && (
            <ErrorMessage errorValue={errors.password} />
          )}
          <TouchableOpacity
            style={{ margin: 25, alignItems: "center", display: "flex" }}
            onPress={()=> navigation.navigate("consentimientoKOMOBI")}
          >
            <Text
              style={{
                color: "#297050",
                fontSize: 14,
                textDecorationLine: "underline",
              }}
            >
              Accediendo consientes los permisos de{" "}
            </Text>
            <Text
              style={{
                color: "#297050",
                fontSize: 16,
                textDecorationLine: "underline",
              }}
            >
              KOMOBI K9
            </Text>
          </TouchableOpacity>
        </>

        {errors.login !== "" && <ErrorMessage errorValue={errors.login} />}
        <View style={styles.buttonContainer}>
          <>
            <Button
              onPress={handleOnLogin}
              title={"LOGIN"}
              color={"#3fb07d"}
              disabled={values.email === "" || values.password === ""}
            />
          </>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  buttonContainer: {
    margin: 25,
  },
  loginBtn: {},
  kshieldContainer: {
    marginHorizontal: "auto",
    marginTop: 50,
    marginBottom: 30,
  },
});

export default Login;
