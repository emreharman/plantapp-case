import Button from "@/components/button";
import Fonts from "@/constants/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Reset AsyncStorage"
        onPress={() => {
          AsyncStorage.clear();
          router.replace("/onboarding");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: { fontFamily: Fonts.bold, fontSize: 22, marginBottom: 24 },
});
