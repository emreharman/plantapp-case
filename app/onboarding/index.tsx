import Bg from "@/assets/images/onboarding1bg.png";
import Button from "@/components/button";
import Fonts from "@/constants/fonts";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const OnboardingStep1 = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [pdfType, setPdfType] = useState<"terms" | "privacy" | null>(null);

  const handleOpenModal = (type: "terms" | "privacy") => {
    setPdfType(type);
    setModalVisible(true);
  };

  const getPdfUrl = () => {
    if (pdfType === "terms") {
      return "https://online.flippingbook.com/view/602747966/";
    }
    if (pdfType === "privacy") {
      return "https://online.flippingbook.com/view/602747966/";
    }
    return "";
  };

  return (
    <ImageBackground source={Bg} style={styles.container} resizeMode="cover">
      <View style={styles.top}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.highlight}>PlantApp</Text>
        </Text>
        <Text style={styles.subtitle}>
          Identify more than 3000+ plants and{"\n"}88% accuracy.
        </Text>
      </View>

      <View style={styles.middle}>
        <Image
          source={require("@/assets/images/onboarding1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottom}>
        <Button
          title="Get Started"
          onPress={() => router.push("/onboarding/step2")}
        />
        <Text style={styles.footer}>
          By tapping next, you are agreeing to PlantID{"\n"}
          <Text style={styles.link} onPress={() => handleOpenModal("terms")}>
            Terms of Use
          </Text>{" "}
          &{" "}
          <Text style={styles.link} onPress={() => handleOpenModal("privacy")}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <WebView source={{ uri: getPdfUrl() }} style={styles.webview} />
          <View style={styles.modalFooter}>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </SafeAreaView>
      </Modal>
    </ImageBackground>
  );
};

export default OnboardingStep1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    flex: 1,
    width: "100%",
  },
  modalFooter: {
    padding: 16,
    backgroundColor: "#fff",
  },
  top: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.regular,
    marginBottom: 12,
  },
  highlight: {
    fontFamily: Fonts.bold,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  middle: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bottom: {
    marginBottom: 24,
  },
  footer: {
    fontSize: 12,
    color: "#597165B2",
    textAlign: "center",
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  link: {
    textDecorationLine: "underline",
  },
});
