import React, {
  useState,
  useEffect,
  FC,
  useContext,
  useCallback,
  useRef,
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
import { FontAwesome } from "@expo/vector-icons";

import { MagicSpinner, ImpulseSpinner } from "react-spinners-kit";

import KShield from "./icons/KShield";
import Wifi0 from "./icons/Wifi0";
import Wifi1 from "./icons/Wifi1";
import Wifi2 from "./icons/Wifi2";
import Wifi3 from "./icons/Wifi3";
import Wifi4 from "./icons/Wifi4";
import RadarIcon from "./icons/Radar";

import { RouteProp } from "@react-navigation/native";
import { K9Context } from "../config/User/user.context";

// import { PermissionsAndroid } from "react-native";
// import * as WifiManagerType from "react-native-wifi-reborn";

const styles = StyleSheet.create({
  kshieldContainer: {
    height: "40%",
    maxHeight: "40%",
    marginHorizontal: "auto",
    marginTop: 50,
    marginBottom: 30,
  },
  kshieldContainer2: {
    height: "35%",
    maxHeight: "40%",
    marginHorizontal: "auto",
    marginTop: 50,
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
    fontSize: 16,
    marginBottom: 8,
    justifyContent: "space-between",
    display: "flex",
  },
  textMyIdFinal: {
    color: "#3fb07d",
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
  bodyWifiSearch: {
    marginTop: "auto",
    marginBottom: "auto",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyWifiSearch2: {
    marginTop: "auto",
    marginBottom: "auto",
    bottom: 0,
    width: "100%",
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  stextState4: {
    color: "#282828",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 24,
    textAlign: "center",
  },
  stextState4_2: {
    color: "#282828",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
  },
  stextState4_3: {
    color: "#282828",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  },
  btnStartSearchStyle: {
    backgroundColor: "#3fb07d",
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
  ledOff: {
    height: "52%",
    width: "25%",
    backgroundColor: "#cc5b5b",
    borderRadius: "50%",
  },
  msgContainer: {
    width: "80%",
    height: 30,
    display: "flex",
    justifyContent: "center",
  },
  textInfo: {
    color: "#282828",
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
    backgroundColor: "#3fb07d",
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
    color: "#3fb07d",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 28,
    width: "100%",
  },
  holder: {
    width: "100%",
    height: 8,
    backgroundColor: "#fefefe",
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "inset 0px 0px 2px rgba(0,0,0,0.2)",
    justifyContent: "flex-end",
  },
  bar: {
    width: "100%",
    backgroundColor: "#3fb07d",
  },
  textMyIdWifiFound: {
    color: "#297050",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontSize: 20,
    justifyContent: "space-between",
    marginTop: "auto",
    display: "flex",
  },
  textMyIdWifiFound2: {
    color: "#282828",
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

// let wifiOutComponent = Math.random() * 99 + 1;

const WifiSearch: FC<IProps> = ({ navigation, timeSearching }) => {
  const [timeSelected, setTimeSelected] = useState<number>(0);
  const [leds, setLeds] = useState<number[]>([0, 0, 0]);
  const [timer, setTimer] = useState(timeSearching * 60);
  const [wifiSignal, setWifiSignal] = useState<number>(
    Math.floor(Math.random() * 40 + 1)
  );
  const [maxWifiSignal, setMaxWifiSignal] = useState<number>(0);

  const [context, _] = useContext(K9Context);

  const id = React.useRef<number | undefined>();

  const startCountDown = () => {
    let a: any;
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);

      a =
        Math.random() > 0.5
          ? Math.floor(wifiSignal + Math.random() * 20 + 1)
          : Math.floor(wifiSignal - Math.random() * 7 + 1);
      console.log(a);

      //signal lost
      if (a < 0) {
        setLeds([1, 1, 0]);
        setTimeSelected(2);
      }

      setWifiSignal(a > 100 ? 100 : a);
    }, 1000);
  };

  const clear = () => {
    window.clearInterval(id.current);
    setTimer(timeSearching * 60);
  };

  useEffect(() => {
    setTimer(timeSearching * 60);
    setTimeSelected(0);
    setLeds([0, 0, 0]);

    return () => clear();
  }, [timeSearching]);

  useEffect(() => {
    if (wifiSignal > maxWifiSignal) {
      console.log(wifiSignal, maxWifiSignal, wifiSignal > maxWifiSignal);
      setMaxWifiSignal(wifiSignal);
    }

    if (timer === 0) {
      clear();
    }
  }, [timer]);

  // useEffect(() => {
  //   !context.user && navigation.navigate("login");
  // }, [context]);

  const passState = () => {
    let newTS = timeSelected + 1;

    setTimeSelected(newTS);
    if (timeSelected === 0) {
      startCountDown();
    }

    if (newTS === 1) {
      setLeds([1, leds[1], leds[2]]);
    } else if (newTS === 2) {
      setLeds([leds[0], 1, leds[2]]);
    } else if (newTS === 3) {
      setLeds([leds[0], leds[1], 1]);
    } else if (newTS === 4) {
      clear();
      setLeds([0, 0, 0]);
      setTimer(timeSearching * 60);
    } else if (newTS > 4) {
      setTimeSelected(0);
    }
  };

  const passErrorState = () => {
    let newTS = timeSelected - 1;
    setTimeSelected(newTS);
    clear();

    if (newTS === -1) {
      setLeds([0, 0, 0]);
    } else if (newTS === -2) {
      setLeds([-1, leds[1], leds[2]]);
    } else if (newTS === -3) {
      setLeds([leds[0], -1, leds[2]]);
    } else if (newTS === -4) {
      setTimeSelected(-1);
    }
  };

  const WifiStrengthIcon = useCallback(() => {
    let Icon: any;
    if (wifiSignal < 20) {
      //icono 0
      Icon = Wifi0;
    } else if (wifiSignal < 40) {
      //icono 1
      Icon = Wifi1;
    } else if (wifiSignal < 60) {
      //icono 2
      Icon = Wifi2;
    } else if (wifiSignal < 80) {
      //icono 3
      Icon = Wifi3;
    } else if (wifiSignal < 100) {
      //icono 4
      Icon = Wifi4;
    }

    return (
      <>
        <View
          style={{
            width: "100%",
            display: "flex",
            height: "100%",
            // flexDirection: "row",
            marginTop: -50,
            marginBottom: -15,
            minWidth: "100%",
          }}
        >
          <View style={{ maxWidth: "100%", height: "100%" }}>{<Icon />}</View>
        </View>
      </>
    );
  }, [wifiSignal]);

  const WifiStrengthBar = useCallback(() => {
    return (
      <>
        <View
          style={{
            // width: "100%",
            // display: "flex",
            // height: "100%",
            // flexDirection: "row",
            // minWidth: "100%",

            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: "80%", position: "relative" }}>
            {/* Max Pointer */}
            <View
              style={{
                width: 1,
                height: 18,
                position: "absolute",
                top: -6,
                left: `${maxWifiSignal}%`,
                zIndex: 70,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#28282882",
              }}
            >
              {/* <Text>V</Text> */}
            </View>
            <View style={styles.holder}>
              <View
                style={{
                  width: `${wifiSignal}%`,
                  backgroundColor: "#297050",
                  height: "100%",
                }}
              >
                <Text> </Text>
              </View>
            </View>
          </View>

          <View style={{ width: "60%" }}>
            <Text style={styles.textMyIdWifiFound}>
              Intensidad {wifiSignal}
            </Text>
            <Text style={styles.textMyIdWifiFound2}>
              max Intensidad {maxWifiSignal}
            </Text>
          </View>
        </View>
      </>
    );
  }, [wifiSignal]);

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

  if (timeSelected === 4) {
    return (
      <>
        <SafeAreaView style={styles.containerSafe}>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "red",
              zIndex: 69,
            }}
            onPress={passState}
          >
            <Text>{timeSelected}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "yellow",
              zIndex: 69,
            }}
            onPress={passErrorState}
          >
            <Text>{timeSelected}</Text>
          </TouchableOpacity>

          <View
            style={{
              paddingHorizontal: "10%",
              alignItems: "center",
              height: "6%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#28282811",
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="head"
              style={{ fontSize: 18, maxWidth: "50%" }}
            >
              <FontAwesome
                name="user"
                style={{ marginRight: 8, color: "#282828", fontSize: 24 }}
              />{" "}
              añsldjasdlñk
            </Text>

            <Text
              numberOfLines={1}
              ellipsizeMode="head"
              style={{ fontSize: 18, maxWidth: "50%" }}
            >
              <FontAwesome
                name="motorcycle"
                style={{ marginRight: 8, color: "#282828", fontSize: 24 }}
              />
              ARUS-420
            </Text>
          </View>

          <View style={styles.kshieldContainer2}>
            <KShield />
          </View>

          <View style={styles.bodyWifiSearch2}>
            <Text style={styles.stextState4}>El dispositivo se reinicia</Text>
            <Text style={styles.stextState4}>despues de la emisión</Text>
            {/* <Text style={styles.stextState4}>30segundos aprox.</Text> */}

            {/* <Text style={styles.stextState4}>¿Recomenzar la busqueda?</Text> */}
          </View>

          <View style={styles.bodyWifiSearch2}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: "45%",
                boxShadow: "rgb(0 0 0 / 9%) 0px -2px 14px 0px",
                padding: 10,
              }}
            >
              <View
                style={{
                  height: "70%",
                  width: "70%",
                  minHeight: 70,
                  minWidth: 70,
                }}
              >
                <RadarIcon />
              </View>
            </TouchableOpacity>
            <Text style={styles.stextState4_3}>Reactivar Escaner</Text>
          </View>
          <View style={styles.btnBottom}>
            <TouchableOpacity
              onPress={() => navigation.navigate("scannerConfig")}
              style={styles.btnBottomStyle}
            >
              <Text style={styles.btnTextStyle}> Parar Escaner </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.containerSafe}>
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "red",
            zIndex: 69,
          }}
          onPress={passState}
        >
          <Text>{timeSelected}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "yellow",
            zIndex: 69,
          }}
          onPress={passErrorState}
        >
          <Text>{timeSelected}</Text>
        </TouchableOpacity>

        {/* <View
          style={{
            paddingHorizontal: "10%",
            alignItems: "center",
            height: "6%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#28282811",
          }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="head"
            style={{ fontSize: 18, maxWidth: "50%" }}
          >
            <FontAwesome
              name="user"
              style={{ marginRight: 8, color: "#282828", fontSize: 24 }}
            />{" "}
            {context.searchedId}{" "}
          </Text>

          <Text
            numberOfLines={1}
            ellipsizeMode="head"
            style={{ fontSize: 18, maxWidth: "50%" }}
          >
            <FontAwesome
              name="motorcycle"
              style={{ marginRight: 8, color: "#282828", fontSize: 24 }}
            />
            ARUS-420
          </Text>
        </View> */}

        <View
          style={{
            paddingHorizontal: "10%",
            alignItems: "center",
            height: "6%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#28282811",
          }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="head"
            style={{ fontSize: 18, maxWidth: "50%" }}
          >
            <FontAwesome
              name="user"
              style={{ marginRight: 8, color: "#282828", fontSize: 24 }}
            />{" "}
            añsldjasdlñk
          </Text>

          <Text
            numberOfLines={1}
            ellipsizeMode="head"
            style={{ fontSize: 18, maxWidth: "50%" }}
          >
            <FontAwesome
              name="motorcycle"
              style={{ marginRight: 8, color: "#282828", fontSize: 24 }}
            />
            ARUS-420
          </Text>
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

        <View style={styles.kshieldContainer}>
          {timeSelected === 3 ? (
            <>
              <WifiStrengthIcon />
              <WifiStrengthBar />
            </>
          ) : timeSelected !== 2 ? (
            <KShield />
          ) : (
            <MagicSpinner color="#3fb07d" size={70} sizeUnit={"vw"} />
          )}
        </View>

        <View style={styles.bodyWifiSearch}>
          <View style={styles.lineaBoard}>
            <View style={styles.ledContainer}>
              <View
                style={
                  leds[0] === 1
                    ? styles.ledOn
                    : leds[0] === -1
                    ? styles.ledOff
                    : styles.led
                }
              ></View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.textInfo}>
                <Text style={{ marginRight: 5 }}>
                  {timeSelected > 0
                    ? "Señal enviada"
                    : leds[0] === -1
                    ? "Error de conexion"
                    : "Enviando Señal"}
                </Text>
                {timeSelected === 0 && <ImpulseSpinner />}
              </Text>
            </View>
          </View>

          <View style={styles.lineaBoard}>
            <View style={styles.ledContainer}>
              <View
                style={
                  leds[1] === 1
                    ? styles.ledOn
                    : leds[1] === -1
                    ? styles.ledOff
                    : styles.led
                }
              ></View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.textInfo}>
                <Text style={{ marginRight: 5 }}>
                  {timeSelected > 1
                    ? "KOMOBI Encendido"
                    : leds[1] === -1
                    ? "el KOMOBI no responde"
                    : "Encendiendo KOMOBI"}
                </Text>
                {timeSelected === 1 && <ImpulseSpinner />}
              </Text>
            </View>
          </View>

          <View style={styles.lineaBoard}>
            <View style={styles.ledContainer}>
              <View
                style={
                  leds[2] === 1
                    ? styles.ledOn
                    : leds[2] === -1
                    ? styles.ledOff
                    : styles.led
                }
              ></View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.textInfo}>
                <Text style={{ marginRight: 5 }}>Emitiendo</Text>

                {(timeSelected === 2 || timeSelected === 3) && (
                  <ImpulseSpinner />
                )}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.btnBottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate("scannerConfig")}
            style={styles.btnBottomStyle}
          >
            <Text style={styles.btnTextStyle}> Parar Escaner </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WifiSearch;
