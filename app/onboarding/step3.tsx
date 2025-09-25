import Bg from "@/assets/images/onboarding3bg.png";
import BgLeaf from "@/assets/images/onboarding3bg_leaf.png";
import Feat from "@/assets/images/onboarding3feat.png";
import Phone from "@/assets/images/onboarding3phone.png";
import Button from "@/components/button";
import Fonts from "@/constants/fonts";
import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const OnboardingStep3 = () => {
  const router = useRouter();

  return (
    <ImageBackground source={Bg} style={styles.container} resizeMode="cover">
      <View style={styles.textWrapper}>
        <Text style={styles.title}>
          Get plant <Text style={styles.highlight}>care guides</Text>
        </Text>
        <Image
          source={require("@/assets/images/underline.png")}
          style={styles.underline}
          resizeMode="contain"
        />
      </View>

      <ImageBackground source={BgLeaf} style={styles.middle} resizeMode="cover">
        <View style={styles.phoneWrapper}>
          <View style={styles.phoneContainer}>
            <Image source={Phone} style={styles.image} resizeMode="contain" />
          </View>
          <Image source={Feat} style={styles.feat} resizeMode="contain" />
        </View>
      </ImageBackground>

      <View style={styles.bottom}>
        <Button title="Continue" onPress={() => router.push("/onboarding")} />
        <View style={styles.dots}>
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingStep3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  textWrapper: {
    position: "relative",
    alignSelf: "flex-start",
    paddingHorizontal: 24,
  },
  underline: {
    position: "absolute",
    top: 35,
    right: 35,
    width: 152,
    height: 13,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.medium,
    marginBottom: 12,
  },
  highlight: {
    fontFamily: Fonts.bold,
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 24,
  },
  phoneWrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    position: "relative",
  },
  phoneContainer: {
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "100%",
  },
  feat: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  bottom: {
    paddingHorizontal: 24,
    marginTop: -100,
    marginBottom: 24,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#13231B",
  },
  inactiveDot: {
    backgroundColor: "#13231B40",
  },
});
