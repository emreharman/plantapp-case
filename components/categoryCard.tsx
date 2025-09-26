import Fonts from "@/constants/fonts";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  onPress?: () => void;
}

/**
 * @name CategoryCard
 * @description A card component used to display a category with an image and title
 * @param {string} title - The category title text
 * @param {string} imageUrl - The image URL to be displayed as the card background
 * @param {function} [onPress] - Optional callback when the card is pressed
 * @returns {JSX.Element} Rendered CategoryCard component
 */
export default function CategoryCard({
  title,
  imageUrl,
  onPress,
}: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 152,
    borderRadius: 14,
    marginBottom: 16,
    backgroundColor: "#f7f7f7",
    overflow: "hidden",
    justifyContent: "flex-start",
    padding: 12,
    borderWidth: 1,
    borderColor: "#3C3C431A",
  },
  image: { ...StyleSheet.absoluteFillObject, resizeMode: "cover" },
  title: {
    width: "70%",
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: "#13231B",
  },
});
