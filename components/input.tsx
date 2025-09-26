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

type Props = TextInputProps & {
  icon?: ImageSourcePropType;
  containerStyle?: ViewStyle;
  right?: ReactNode;
};

export default function Input({
  icon,
  containerStyle,
  right,
  style,
  ...rest
}: Props) {
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
