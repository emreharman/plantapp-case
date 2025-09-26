import Fonts from "@/constants/fonts";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  icon: any;
  title: string;
  subtitle: string;
};

export default function PaywallFeatureCard({ icon, title, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 156,
    height: 130,
    backgroundColor: "#FFFFFF14",
    borderRadius: 14,
    padding: 24,
    marginRight: 16,
    justifyContent: "center",
  },
  iconWrapper: { width: 36, height: 36 },
  icon: { width: "100%", height: "100%" },
  title: {
    color: "#fff",
    fontFamily: Fonts.medium,
    fontSize: 20,
    marginTop: 12,
  },
  subtitle: {
    color: "#FFFFFFB2",
    fontSize: 13,
    marginTop: 6,
    fontFamily: Fonts.regular,
  },
});
