import Fonts from "@/constants/fonts";
import { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

interface InputProps extends TextInputProps {
  icon?: ImageSourcePropType;
  containerStyle?: ViewStyle;
  right?: ReactNode;
}

/**
 * @name Input
 * @description A customizable input component with optional left icon and right element
 * @param {ImageSourcePropType} [icon] - Optional icon to display on the left side of the input
 * @param {ViewStyle} [containerStyle] - Optional style to override the container
 * @param {ReactNode} [right] - Optional element to render on the right side of the input
 * @param {TextInputProps} rest - All other standard TextInput props
 * @returns {JSX.Element} Rendered Input component
 */
export default function Input({
  icon,
  containerStyle,
  right,
  style,
  ...rest
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && <Image source={icon} style={styles.icon} />}
      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholderTextColor="#AFAFAF"
      />
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFFE0",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#3C3C4340",
  },
  icon: { width: 20, height: 20, marginRight: 8, resizeMode: "contain" },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: "#13231B",
    height: 44,
  },
});
