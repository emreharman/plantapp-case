import Fonts from "@/constants/fonts";
import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

type Props = {
  title: string;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#28AF6E",
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
});
