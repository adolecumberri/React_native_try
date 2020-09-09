import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { K9Context } from "../config/User/user.context";

const UserModalMenu = ({ navigation }: { navigation: any }) => {
  const [_, setContext] = useContext(K9Context);

  const logout = () => {
    setContext({
      user: { email: "" },
      searchedId: "",
    });
    navigation.navigate("login");
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} onPress={() => logout()}>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              display: "flex",
              alignItems: "flex-end",
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
              fontWeight: "500",
            }}
          >
            Log out
            <Ionicons
              name="ios-log-out"
              size={24}
              style={{ marginHorizontal: 8, fontWeight: "500" }}
              color="black"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#aeaeae",
    width: "100%",
    minHeight: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserModalMenu;
