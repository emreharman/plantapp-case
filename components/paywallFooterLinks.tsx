import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: (type: "terms" | "privacy" | "restore") => void;
};

export default function PaywallFooterLinks({ onPress }: Props) {
  return (
    <View style={styles.footerLinks}>
      <TouchableOpacity onPress={() => onPress("terms")}>
        <Text style={styles.footerLink}>Terms</Text>
      </TouchableOpacity>
      <Text style={styles.footerDot}>•</Text>
      <TouchableOpacity onPress={() => onPress("privacy")}>
        <Text style={styles.footerLink}>Privacy</Text>
      </TouchableOpacity>
      <Text style={styles.footerDot}>•</Text>
      <TouchableOpacity onPress={() => onPress("restore")}>
        <Text style={styles.footerLink}>Restore</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerLinks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  footerLink: { color: "#FFFFFF80", fontSize: 11, marginHorizontal: 6 },
  footerDot: { color: "#888" },
});
