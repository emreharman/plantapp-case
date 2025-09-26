import Fonts from "@/constants/fonts";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = { title: string; imageUrl: string; onPress?: () => void };

export default function CategoryCard({ title, imageUrl, onPress }: Props) {
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
