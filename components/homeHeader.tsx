import Input from "@/components/input";
import Fonts from "@/constants/fonts";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

interface HomeHeaderProps {
  greeting?: string;
  title?: string;
}

/**
 * @name HomeHeader
 * @description A header component for the home screen that displays a greeting, a title, and a search input
 * @param {string} [greeting="Hi, plant lover!"] - Optional greeting text to display above the title
 * @param {string} [title="Good Afternoon! ⛅"] - Optional title text to display below the greeting
 * @returns {JSX.Element} Rendered HomeHeader component
 */
export default function HomeHeader({
  greeting = "Hi, plant lover!",
  title = "Good Afternoon! ⛅",
}: HomeHeaderProps) {
  return (
    <ImageBackground
      source={require("@/assets/images/homeHeaderBg.png")}
      style={styles.headerBg}
      imageStyle={{ resizeMode: "cover" }}
    >
      <View style={styles.headerContent}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="Search for plants"
          icon={require("@/assets/icons/search.png")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  headerBg: {
    width: "100%",
    paddingTop: 75,
    paddingBottom: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#3C3C4340",
  },
  headerContent: { paddingHorizontal: 24 },
  greeting: { fontSize: 16, fontFamily: Fonts.regular, color: "#13231B" },
  title: {
    fontSize: 24,
    fontFamily: Fonts.medium,
    marginTop: 4,
    color: "#13231B",
  },
});
