import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FC,
  useContext,
} from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
//  import {ReactComponent as KShield} from "./icons/KOMOBIShield.svg";

import { ButtonGroup } from "react-native-elements";
import { Picker } from "@react-native-community/picker";
import { MagicSpinner, ImpulseSpinner } from "react-spinners-kit";
import KShield from "./icons/KShield";
import { RouteProp } from "@react-navigation/native";
import { K9Context } from "../config/User/user.context";

// import { PermissionsAndroid } from "react-native";
// import * as WifiManagerType from "react-native-wifi-reborn";

const styles = StyleSheet.create({
  kshieldContainer: {
    marginHorizontal: "auto",
    marginTop: 50,
    marginBottom: 30,
  },
  containerSafe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnStartSearch: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  btnStartSearchStyle: {
    backgroundColor: "#3fb07d",
    width: "100vw",
    padding: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnDisabled: {
    backgroundColor: "#eaeaea",
    width: "100vw",
    padding: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnStartSearchText: {
    fontSize: 20,
    color: "white",
  },
  explanation: {
    color: "#000",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 22,
    marginBottom: 20,
  },
});

interface IProps {
  setTimeSearching: Dispatch<SetStateAction<number>>;
  route: RouteProp<Record<string, object | undefined>, "scannerConfig">;
  navigation: any;
}

const TimePicker: FC<IProps> = ({ navigation, setTimeSearching }) => {
  const [timeSelected, setTimeSelected] = useState(-1);

  const [context, _] = useContext(K9Context);

  useEffect(() => {
    !context.user && navigation.navigate("login");
  }, [context]);

  return (
    <>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.kshieldContainer}>
          <KShield />
        </View>
        <View
          style={{
            paddingHorizontal: "10%",
            textAlign: "center",
            marginVertical: "5%",
          }}
        >
          <Text style={styles.explanation}>Tiempo de emision de señal</Text>
        </View>
        <View style={{ paddingHorizontal: "10%" }}>
          <ButtonGroup
            onPress={(selectedIndex) => setTimeSelected(selectedIndex)}
            selectedIndex={timeSelected}
            buttons={["3 minutos", "5 minutos", "10 minutos"]}
            containerStyle={{ height: 100, flexDirection: "column" }}
            selectedButtonStyle={{ backgroundColor: "#297050" }}
          />
        </View>

        <View style={styles.btnStartSearch}>
          <TouchableOpacity
            disabled={timeSelected === -1}
            onPress={() => {
              console.log("setTimeSearching", setTimeSearching);
              setTimeSearching(TIME_DICCIONARY[timeSelected]);
              navigation.navigate("scanner", { Params: { timeSelected } });
            }}
            style={
              timeSelected === -1
                ? styles.btnDisabled
                : styles.btnStartSearchStyle
            }
          >
            <Text style={styles.btnStartSearchText}> Comenzar Escaner</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

//parsin btnGroup to num of minutes to wait
const TIME_DICCIONARY = [3, 5, 10];

export default TimePicker;
