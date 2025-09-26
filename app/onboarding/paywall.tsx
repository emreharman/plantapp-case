import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
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
import PaywallFeatureCard from "@/components/paywallFeatureCard";
import PaywallFooterLinks from "@/components/paywallFooterLinks";
import PaywallPlanCard from "@/components/paywallPlanCard";
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
    switch (modalType) {
      case "terms":
      case "privacy":
      case "restore":
        return "https://online.flippingbook.com/view/602747966/";
      default:
        return "";
    }
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
              <PaywallFeatureCard key={idx} {...item} />
            ))}
          </ScrollView>

          <View style={styles.plansWrapper}>
            {PLANS.map((plan) => (
              <PaywallPlanCard
                key={plan.id}
                {...plan}
                selected={selectedPlan === plan.id}
                onSelect={setSelectedPlan}
              />
            ))}
          </View>

          <View style={styles.ctaWrapper}>
            <Button title="Try free for 3 days" onPress={completeOnboarding} />
            <Text style={styles.ctaNote}>
              After the 3-day free trial period you’ll be charged ₺274.99 per
              year unless you cancel before the trial expires. Yearly
              Subscription is Auto-Renewable
            </Text>
          </View>

          <PaywallFooterLinks onPress={openModal} />
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
  plansWrapper: { marginTop: 24, paddingHorizontal: 24 },
  ctaWrapper: { paddingHorizontal: 24, marginTop: 12 },
  ctaNote: {
    fontSize: 9,
    color: "#FFFFFF85",
    textAlign: "center",
    marginTop: 8,
  },
  modalContainer: { flex: 1, backgroundColor: "#fff" },
  webview: { flex: 1, width: "100%" },
  modalFooter: { padding: 16, backgroundColor: "#fff" },
});
