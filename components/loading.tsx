import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {
  size?: "small" | "large";
};

const Loading: React.FC<Props> = ({ size = "large" }) => (
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
