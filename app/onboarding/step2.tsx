import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OnboardingStep2 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding Step 2</Text>

      <TouchableOpacity style={styles.skipButton} onPress={() => {}}>
        <Text style={styles.skipText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingStep2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 30 },
  button: {
    backgroundColor: "#34C759",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
  skipButton: { marginTop: 10 },
  skipText: { color: "#666", fontSize: 14 },
});
