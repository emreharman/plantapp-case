import Fonts from "@/constants/fonts";
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from "react-native";

type PaywallFeatureCardProps = {
  icon: ImageSourcePropType;
  title: string;
  subtitle: string;
};

/**
 * @name PaywallFeatureCard
 * @description A card component to display a feature in the paywall screen
 * @param {ImageSourcePropType} icon - The icon to display for the feature
 * @param {string} title - The title of the feature
 * @param {string} subtitle - The subtitle or description of the feature
 * @returns {JSX.Element} Rendered feature card
 */
export default function PaywallFeatureCard({
  icon,
  title,
  subtitle,
}: PaywallFeatureCardProps) {
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
