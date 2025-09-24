import Fonts from "@/constants/fonts";
import { StyleSheet, Text, View } from "react-native";

export default function GardenScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Garden</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontFamily: Fonts.bold, fontSize: 22 },
});
