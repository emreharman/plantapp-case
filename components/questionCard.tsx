import Fonts from "@/constants/fonts";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = { title: string; imageUri: string };

/**
 * @name QuestionCard
 * @description A card component used to display a question with a background image and overlay text.
 * @param {string} title - The question title to display inside the card
 * @param {string} imageUri - The URI of the background image
 * @returns {JSX.Element} Rendered QuestionCard component
 */
export default function QuestionCard({ title, imageUri }: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <ImageBackground
        source={{ uri: imageUri }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 164,
    borderRadius: 14,
    marginRight: 16,
    overflow: "hidden",
    backgroundColor: "#ddd",
  },
  image: { width: "100%", height: "100%", justifyContent: "flex-end" },
  overlay: {
    height: 64,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    justifyContent: "center",
    backgroundColor: "#00000033",
  },
  title: { color: "#fff", fontFamily: Fonts.regular, fontSize: 15 },
});
