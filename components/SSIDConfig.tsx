import React, { useState, useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import FormInput from "./FormInput";
import { Picker } from "@react-native-community/picker";
import KShield from "./icons/KShield";

import { ImpulseSpinner } from "react-spinners-kit";
import { K9Context } from "../config/User/user.context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSafe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  kshieldContainer: {
    marginHorizontal: "auto",
    marginTop: 50,
    marginBottom: 30,
  },
  marginPicker: {
    marginHorizontal: 20,
  },
  btnBottom: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  btnBottomStyle: {
    backgroundColor: "#297050",
    width: "100vw",
    /* font-size: 41px; */
    padding: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnBottomStyleDisabled: {
    // backgroundColor: "red",
    backgroundColor: "#eaeaea",
    width: "100vw",
    padding: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextStyle: {
    fontSize: 20,
    color: "white",
  },

  textCargandoMotorcycles: {
    color: "#297050",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
    marginBottom: 8,
    // justifyContent: "space-between",

    alignItems: "baseline",
    display: "flex",
  },
});

let timer: number = 0;

const SSIDConfig = ({ navigation }: { navigation: any }) => {
  const [deviceId, setDeviceId] = useState("");
  const [motoSelected, setMotoSelected] = useState<string | undefined>();
  const [motorcyclesList, setMotorcyclesList] = useState<string[]>([]);
  const [pikerState, setPickerState] = useState(-1);
  const [isSelected, setSelection] = useState(false);

  //Context
  const [context, setContext] = useContext(K9Context);

  const loadMotorcyclesList = (userId: string) => {
    setPickerState(0);
    clearTimeout(timer as number);
    timer = setTimeout(() => {
      if (userId.includes("e")) {
        searchMotorCycleError(userId);
      } else {
        searchMotorcycle(userId);
      }
    }, 1500);
  };

  const searchMotorCycleError = (userId: string) => {
    setMotorcyclesList([]);
    setMotoSelected(undefined);
    setPickerState(2);
  };

  const searchMotorcycle = (userId: string) => {
    setMotorcyclesList([
      "Naked",
      "Scooter",
      "Custom",
      "Racing",
      "Sport-Turismo",
    ]);
    setMotoSelected(undefined);
    setPickerState(1);
  };

  const handleOnLogin = async () => {
    setTimeout(() => {
      setContext({
        user: { email: context.user.email },
        searchedId: deviceId,
      });
      navigation.navigate("scannerConfig");
    }, 1000);
  };

  return (
    <>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.kshieldContainer}>
          <KShield />
        </View>
        {/* <Ionicons name="ios-search" size={24} color="black" /> */}
        <FormInput
          name="email"
          value={deviceId}
          onChangeText={(e: any) => {
            setDeviceId(e);
            loadMotorcyclesList(e);
          }}
          placeholder="Id del motorista"
          autoCapitalize="none"
          iconName="ios-search"
          iconColor="#2C384A"
        />
        <View style={styles.marginPicker}>
          {pikerState === 0 && (
            <Text style={styles.textCargandoMotorcycles}>
              {" "}
              Cargando Motos del individuo
              <ImpulseSpinner />
            </Text>
          )}

          {pikerState !== 0 && (
            <>
              <Picker
                selectedValue={motoSelected}
                style={{
                  height: 50,
                  // width: "80%",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: "#297050",
                  marginBottom: 30,
                  fontFamily:
                    '18px, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
                  // fontSize: "18px",
                }}
                onValueChange={(itemValue: any) =>
                  itemValue && setMotoSelected(itemValue)
                }
              >
                {pikerState === -1 && (
                  <Picker.Item label="No hay motos cargadas" value="" />
                )}

                {pikerState === 2 && (
                  <Picker.Item label="Id incorrecta" value="" />
                )}

                {pikerState === 1 && (
                  <Picker.Item label="Seleccione una moto" value="" />
                )}
                {motorcyclesList.map((moto) => (
                  <Picker.Item label={moto} value={moto} />
                ))}
              </Picker>
            </>
          )}

          <Text style={{ color: "#297050", fontSize: 18 }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              // style={styles.checkbox}
            />{" "}
            Permisos y avisos legales de K9
          </Text>
        </View>

        <View style={styles.btnBottom}>
          <TouchableOpacity
            onPress={() => handleOnLogin()}
            style={
              deviceId !== "" && motoSelected !== undefined && isSelected
                ? styles.btnBottomStyle
                : styles.btnBottomStyleDisabled
            }
            // disabled={motoSelected !== undefined && !isSelected}
          >
            <Text style={styles.btnTextStyle}> Comenzar Escaner</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SSIDConfig;
