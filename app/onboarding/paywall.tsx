import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ImageBackground,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

import Bg from "@/assets/images/paywall_img.png";
import Button from "@/components/button";
import Fonts from "@/constants/fonts";

const FEATURES = [
  {
    icon: require("@/assets/icons/unlimited.png"),
    title: "Unlimited",
    subtitle: "Plant Identify",
  },
  {
    icon: require("@/assets/icons/faster.png"),
    title: "Faster",
    subtitle: "Process",
  },
  {
    icon: require("@/assets/icons/unlimited.png"),
    title: "Detailed",
    subtitle: "Plant Care",
  },
];

const PLANS = [
  { id: "month", title: "1 Month", subtitle: "$2.99/month, auto renewable" },
  {
    id: "year",
    title: "1 Year",
    subtitle: "First 3 days free, then $529.99/year",
    badge: "Save 50%",
  },
];

const Paywall = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("year");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<
    "terms" | "privacy" | "restore" | null
  >(null);

  const openModal = (type: "terms" | "privacy" | "restore") => {
    setModalType(type);
    setModalVisible(true);
  };

  const getPdfUrl = () => {
    if (modalType === "terms")
      return "https://online.flippingbook.com/view/602747966/";
    if (modalType === "privacy")
      return "https://online.flippingbook.com/view/602747966/";
    if (modalType === "restore")
      return "https://online.flippingbook.com/view/602747966/";
    return "";
  };

  const completeOnboarding = async () => {
    await AsyncStorage.setItem("hasOnboarded", "true");
    router.dismissAll();
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Bg}
        style={styles.topImage}
        resizeMode="contain"
        imageStyle={styles.imageBg}
      />
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={completeOnboarding}
        >
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <Text style={styles.title}>
              <Text style={styles.bold}>PlantApp</Text> Premium
            </Text>
            <Text style={styles.subtitle}>Access All Features</Text>
          </View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.slider}
          >
            {FEATURES.map((item, idx) => (
              <View key={idx} style={styles.card}>
                <View style={styles.cardIconWrapper}>
                  <Image source={item.icon} style={styles.cardIcon} />
                </View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.plansWrapper}>
            {PLANS.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <TouchableOpacity
                  key={plan.id}
                  style={[styles.planBox, isSelected && styles.activePlanBox]}
                  onPress={() => setSelectedPlan(plan.id)}
                  activeOpacity={0.8}
                >
                  <View style={styles.planRow}>
                    <View
                      style={[
                        styles.radioOuter,
                        isSelected && styles.radioOuterActive,
                      ]}
                    >
                      {isSelected && <View style={styles.radioInner} />}
                    </View>
                    <View>
                      <Text
                        style={[
                          styles.planTitle,
                          isSelected && styles.planTitleActive,
                        ]}
                      >
                        {plan.title}
                      </Text>
                      <Text style={styles.planSubtitle}>{plan.subtitle}</Text>
                    </View>
                  </View>
                  {plan.badge && (
                    <View style={styles.planBadge}>
                      <Text style={styles.badgeText}>{plan.badge}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.ctaWrapper}>
            <Button title="Try free for 3 days" onPress={completeOnboarding} />
            <Text style={styles.ctaNote}>
              After the 3-day free trial period you’ll be charged ₺274.99 per
              year unless you cancel before the trial expires. Yearly
              Subscription is Auto-Renewable
            </Text>
          </View>
          <View style={styles.footerLinks}>
            <TouchableOpacity onPress={() => openModal("terms")}>
              <Text style={styles.footerLink}>Terms</Text>
            </TouchableOpacity>
            <Text style={styles.footerDot}>•</Text>
            <TouchableOpacity onPress={() => openModal("privacy")}>
              <Text style={styles.footerLink}>Privacy</Text>
            </TouchableOpacity>
            <Text style={styles.footerDot}>•</Text>
            <TouchableOpacity onPress={() => openModal("restore")}>
              <Text style={styles.footerLink}>Restore</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <WebView source={{ uri: getPdfUrl() }} style={styles.webview} />
          <View style={styles.modalFooter}>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#101E17" },
  topImage: { height: "80%" },
  imageBg: { resizeMode: "cover" },
  overlay: { width: "100%", height: "100%", position: "absolute" },
  closeButton: {
    position: "absolute",
    top: 60,
    right: 24,
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 4,
    borderRadius: 20,
  },
  scroll: { flexGrow: 1, marginTop: "80%" },
  scrollContent: { paddingBottom: 40 },
  header: { paddingHorizontal: 24 },
  title: { color: "#fff", fontSize: 30 },
  bold: { fontFamily: Fonts.bold },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 17,
    color: "#FFFFFFB2",
    fontWeight: "300",
    marginTop: 8,
  },
  slider: { marginTop: 24, paddingLeft: 24 },
  card: {
    width: 156,
    height: 130,
    backgroundColor: "#FFFFFF14",
    borderRadius: 14,
    padding: 24,
    marginRight: 16,
    justifyContent: "center",
  },
  cardIconWrapper: { width: 36, height: 36 },
  cardIcon: { width: "100%", height: "100%" },
  cardTitle: {
    color: "#fff",
    fontFamily: Fonts.medium,
    fontSize: 20,
    marginTop: 12,
  },
  cardSubtitle: {
    color: "#FFFFFFB2",
    fontSize: 13,
    marginTop: 6,
    fontFamily: Fonts.regular,
  },
  plansWrapper: { marginTop: 24, paddingHorizontal: 24 },
  planBox: {
    position: "relative",
    height: 60,
    borderWidth: 1,
    borderColor: "#FFFFFF4D",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#FFFFFF0D",
    justifyContent: "center",
  },
  activePlanBox: { borderColor: "#28AF6E", backgroundColor: "#28AF6E3D" },
  planRow: { flexDirection: "row", alignItems: "center", gap: 12 },
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
  ctaWrapper: { paddingHorizontal: 24, marginTop: 12 },
  ctaNote: {
    fontSize: 9,
    color: "#FFFFFF85",
    textAlign: "center",
    marginTop: 8,
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  footerLink: { color: "#FFFFFF80", fontSize: 11, marginHorizontal: 6 },
  footerDot: { color: "#888" },
  modalContainer: { flex: 1, backgroundColor: "#fff" },
  webview: { flex: 1, width: "100%" },
  modalFooter: { padding: 16, backgroundColor: "#fff" },
});
