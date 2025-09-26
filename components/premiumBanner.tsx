import Fonts from "@/constants/fonts";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * @name PremiumBanner
 * @description Banner component displayed on the home screen to promote premium upgrade.
 * It includes an icon, title, subtitle, and a right arrow indicator.
 * @returns {JSX.Element} Rendered premium banner component
 */
export default function PremiumBanner() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image
        source={require("@/assets/icons/message.png")}
        style={styles.icon}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>FREE Premium Available</Text>
        <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
      </View>
      <Image source={require("@/assets/icons/rightArrow.png")} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24201A",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 12,
    marginTop: 20,
    marginBottom: 20,
    height: 64,
  },
  icon: { width: 36, marginRight: 12, resizeMode: "contain" },
  title: { color: "#E5C990", fontFamily: Fonts.bold, fontSize: 16 },
  subtitle: { color: "#F5C25B", fontFamily: Fonts.regular, fontSize: 13 },
});
