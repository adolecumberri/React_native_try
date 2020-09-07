import "react-native-gesture-handler";
import * as React from "react";

import { StyleSheet, Text, View, Button } from "react-native";
//  import {ReactComponent as KShield} from "./icons/komobiShield.svg";

import KShield from "./icons/KShield";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "gold",
  },
});

const WifiBars = () => {
  const { mainContainer } = styles;
  return (
    <>
      <View style={mainContainer}>
        <Text> Caja de barritas de wifi </Text>
        {/* <KShield /> */}
      </View>
    </>
  );
};

export default WifiBars;
