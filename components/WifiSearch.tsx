import React, { useState, useEffect, FC, useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
//  import {ReactComponent as KShield} from "./icons/komobiShield.svg";

import { ButtonGroup } from "react-native-elements";
import { Picker } from "@react-native-community/picker";
import { MagicSpinner, ImpulseSpinner } from "react-spinners-kit";
import KShield from "./icons/KShield";
import WifiBars from "./WifiBars";
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

  btnBottom2: {
    position: "absolute",
    top: 270,
    justifyContent: "center",
    paddingTop: "10%",
    paddingHorizontal: "20%",
    // textAlign: "center",
  },

  textMyId: {
    color: "#297050",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
    marginBottom: 8,
    justifyContent: "space-between",
    display: "flex",
  },
  textMyIdFinal: {
    color: "#297050",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
    width: "100%",
  },
  loaderContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  btnStartSearch: {
    marginTop: "auto",
    marginBottom: "auto",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStartSearchStyle: {
    backgroundColor: "#297050",
    width: "100vw",
    /* font-size: 41px; */
    padding: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnStartSearchText: {
    fontSize: 20,
    color: "white",
  },
  lineaBoard: {
    width: "85%",
    height: 30,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  ledContainer: {
    width: "20%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  led: {
    height: "52%",
    width: "25%",
    backgroundColor: "#eaeaea",
    borderRadius: "50%",
  },
  ledOn: {
    height: "52%",
    width: "25%",
    backgroundColor: "#5BCC99",
    borderRadius: "50%",
  },
  msgContainer: {
    width: "80%",
    height: 30,
    display: "flex",
    justifyContent: "center",
  },
  textInfo: {
    color: "#297050",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
    marginBottom: 8,
    // justifyContent: "space-between",

    alignItems: "baseline",
    display: "flex",
  },
  btnBottom: {
    marginTop: "auto",
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
  btnTextStyle: {
    fontSize: 20,
    color: "white",
  },
  myTimeText: {
    color: "#297050",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 28,
    width: "100%",
  },
  holder: {
    width: 50,
    height: 200,
    backgroundColor: "#fefefe",
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "inset 0px 0px 2px rgba(0,0,0,0.2)",
    justifyContent: "flex-end",
  },
  bar: {
    width: "100%",
    backgroundColor: "#297050",
  },
  textMyIdWifiFound: {
    color: "#297050",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
    marginBottom: 8,
    justifyContent: "space-between",
    marginTop: "auto",
    display: "flex",
  },
});

interface IProps {
  timeSearching: number;
  route: RouteProp<Record<string, object | undefined>, "scanner">;
  navigation: any;
}

const WifiSearch: FC<IProps> = ({ navigation, timeSearching }) => {
  const [timeSelected, setTimeSelected] = useState(0);
  const [timer, setTimer] = useState(timeSearching * 60);
  const [wifiSignal, setWifiSignal] = useState(Math.random() * 99 + 1);

  const [context, _] = useContext(K9Context);

  const id = React.useRef<number | undefined>();

  const startCountDown = () => {
    console.log("timer", timer);
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
  };

  const clear = () => {
    window.clearInterval(id.current);
    setTimer(60);
    setTimeSelected(-1);
  };

  useEffect(() => {
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const passState = () => {
    setTimeSelected(timeSelected + 1);
    if (timeSelected === 0) {
      startCountDown();
    }

    if (timeSelected === 3) {
      clear();
    }
  };

  const WifiStrengthBar = () => {
    let myWifiSignal = Math.random() * 99 + 1;
    return (
      <>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            minWidth: "200px",
          }}
        >
          <View style={{ width: "30%" }}>
            <View style={styles.holder}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#297050",
                  height: `${myWifiSignal}%`,
                }}
              >
                <Text> </Text>
              </View>
            </View>
          </View>

          <View style={{ width: "60%" }}>
            <Text style={styles.textMyIdWifiFound}>Señal wifi</Text>
          </View>
        </View>
      </>
    );
  };

  const GetTime = () => {
    let mins = Math.floor(timer / 60);
    let formattedMins = ("0" + mins).slice(-2);
    let secs = timer - mins * 60;
    let formattedSecs = ("0" + secs).slice(-2);
    return (
      <>
        <Text style={styles.myTimeText}>
          {formattedMins}:{formattedSecs}
        </Text>
      </>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.containerSafe}>
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            // backgroundColor: "red",
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onPress={passState}
        >
          {/* <Text>{timeSelected}</Text> */}
          <Text>{"   "}</Text>
        </TouchableOpacity>

        <View style={{ paddingHorizontal: "10%", marginTop: "5%" }}>
          <Text style={styles.textMyId}>
            <Text>User:</Text> <Text> {context.searchedId} </Text>
          </Text>
          <Text style={styles.textMyId}>
            <Text>Moto Id:</Text>
            <Text>ARUS-420</Text>
          </Text>
        </View>

        <View style={styles.kshieldContainer}>
          {timeSelected === 3 ? (
            <WifiStrengthBar />
          ) : timeSelected !== 2 ? (
            <KShield />
          ) : (
            <MagicSpinner color="#297050" size={70} sizeUnit={"vw"} />
          )}
        </View>

        <View
          style={{
            paddingHorizontal: "10%",
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.textMyId}>
            <GetTime />
          </Text>
        </View>

        <View style={styles.btnStartSearch}>
          <View style={styles.lineaBoard}>
            <View style={styles.ledContainer}>
              <View style={timeSelected > 0 ? styles.ledOn : styles.led}></View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.textInfo}>
                <Text>Comando enviado</Text>
              </Text>
            </View>
          </View>

          <View style={styles.lineaBoard}>
            <View style={styles.ledContainer}>
              <View style={timeSelected > 1 ? styles.ledOn : styles.led}></View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.textInfo}>
                <Text style={{ marginRight: 5 }}>Encendiendo Komobi</Text>
                {timeSelected === 1 && <ImpulseSpinner />}
              </Text>
            </View>
          </View>

          <View style={styles.lineaBoard}>
            <View style={styles.ledContainer}>
              <View style={timeSelected > 2 ? styles.ledOn : styles.led}></View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.textInfo}>
                <Text style={{ marginRight: 5 }}>Emitiendo</Text>

                {timeSelected === 2 && <ImpulseSpinner />}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.btnBottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate("scannerConfig")}
            style={styles.btnBottomStyle}
          >
            <Text style={styles.btnTextStyle}> Abortar </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WifiSearch;
