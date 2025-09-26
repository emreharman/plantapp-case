import Fonts from "@/constants/fonts";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

/**
 * @name Button
 * @description A reusable button component built on top of TouchableOpacity.
 * @param {string} title - The text to display inside the button.
 * @param {TouchableOpacityProps} props - Inherits all TouchableOpacity props (e.g., onPress, disabled, etc.)
 * @returns {JSX.Element} - Rendered Button component.
 */

const Button: React.FC<ButtonProps> = ({ title, style, ...props }) => {
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
