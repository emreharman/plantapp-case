import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type LoadingProps = {
  size?: "small" | "large";
};

/**
 * @name Loading
 * @description A simple loading spinner component
 * @param {"small" | "large"} [size="large"] - Size of the loading indicator
 * @returns {JSX.Element} Rendered loading indicator
 */
const Loading: React.FC<LoadingProps> = ({ size = "large" }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
