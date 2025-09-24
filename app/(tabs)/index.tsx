import Fonts from "@/constants/fonts";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HubX</Text>
      <Text style={styles.subtitle}>PlantApp Study Case</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    marginTop: 8,
  },
});
