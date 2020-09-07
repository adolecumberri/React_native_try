import React, { FC } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

interface IProps {}

const Home: FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Signout"
        onPress={() => {
          console.log("hola");
        }}
        color = {"#F57C00"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
