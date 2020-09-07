import React, { FC } from "react";
import { Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  iconName: string;
  iconColor: string;
  returnKeyType?: string;
  keyboardType?: string;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  [x: string]: any;
}

const FormInput: FC<IProps> = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  secureTextEntry = false,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={
        <Ionicons
          name={iconName}
          style={styles.iconStyle}
          size={28}
          color={iconColor}
        />
      }
      placeholderTextColor={"grey"}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
    border: "0px solid black !important",
  },
  iconStyle: {
    marginRight: 10,
  },
});

export default FormInput;
