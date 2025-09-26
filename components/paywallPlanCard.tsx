import Fonts from "@/constants/fonts";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  selected: boolean;
  onSelect: (id: string) => void;
};

export default function PaywallPlanCard({
  id,
  title,
  subtitle,
  badge,
  selected,
  onSelect,
}: Props) {
  const Wrapper: any = selected ? LinearGradient : View;

  return (
    <TouchableOpacity onPress={() => onSelect(id)} activeOpacity={0.8}>
      <Wrapper
        colors={
          selected ? ["rgba(40,175,110,0.24)", "rgba(40,175,110,0)"] : undefined
        }
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={[styles.planBox, selected && styles.activePlanBox]}
      >
        <View style={styles.row}>
          <View
            style={[styles.radioOuter, selected && styles.radioOuterActive]}
          >
            {selected && <View style={styles.radioInner} />}
          </View>
          <View>
            <Text
              style={[styles.planTitle, selected && styles.planTitleActive]}
            >
              {title}
            </Text>
            <Text style={styles.planSubtitle}>{subtitle}</Text>
          </View>
        </View>
        {badge && (
          <View style={styles.planBadge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  planBox: {
    position: "relative",
    height: 60,
    borderWidth: 1,
    borderColor: "#FFFFFF4D",
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
    justifyContent: "center",
    overflow: "hidden",
  },
  activePlanBox: {
    borderColor: "#28AF6E",
  },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  planTitle: { color: "#fff", fontFamily: Fonts.medium, fontSize: 16 },
  planTitleActive: { color: "#fff" },
  planSubtitle: { color: "#FFFFFFB2", fontSize: 12 },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF26",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterActive: { backgroundColor: "#28AF6E" },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  planBadge: {
    backgroundColor: "#28AF6E",
    position: "absolute",
    right: 0,
    top: 0,
    padding: 6,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  badgeText: { fontSize: 14, fontFamily: Fonts.medium, color: "#fff" },
});
