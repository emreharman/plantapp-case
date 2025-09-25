import Loading from "@/components/loading";
import Fonts from "@/constants/fonts";
import { useCategories } from "@/hooks/useCategories";
import { useQuestions } from "@/hooks/useQuestions";
import { useAppDispatch } from "@/store/hooks";
import { fetchCategories } from "@/store/slices/category.slice";
import { fetchQuestions } from "@/store/slices/question.slice";
import { useCallback, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const categories = useCategories();
  const questions = useQuestions();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await Promise.all([
        dispatch(fetchCategories()).unwrap(),
        dispatch(fetchQuestions()).unwrap(),
      ]);
    } finally {
      setRefreshing(false);
    }
  }, [dispatch]);

  if (categories.loading || questions.loading) {
    return <Loading />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={require("@/assets/images/homeHeaderBg.png")}
          style={styles.headerBg}
          imageStyle={{ resizeMode: "cover" }}
        >
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>Hi, plant lover!</Text>
            <Text style={styles.title}>Good Afternoon! ⛅</Text>
            <View style={styles.searchBox}>
              <Image
                source={require("@/assets/icons/search.png")}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search for plants"
                placeholderTextColor="#AFAFAF"
                style={styles.searchInput}
              />
            </View>
          </View>
        </ImageBackground>
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <TouchableOpacity style={styles.premiumBanner} activeOpacity={0.8}>
            <Image
              source={require("@/assets/icons/message.png")}
              style={styles.bannerIcon}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerTitle}>FREE Premium Available</Text>
              <Text style={styles.bannerSubtitle}>
                Tap to upgrade your account!
              </Text>
            </View>
            <Image source={require("@/assets/icons/rightArrow.png")} />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Get Started</Text>
          <FlatList
            data={questions.items}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled={false}
            snapToInterval={240 + 16}
            decelerationRate="fast"
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            windowSize={5}
            removeClippedSubviews
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.questionCard} activeOpacity={0.8}>
                <ImageBackground
                  source={{ uri: item.image_uri }}
                  resizeMode="cover"
                  style={styles.questionImg}
                >
                  <View
                    style={{
                      height: 64,
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: 12,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.questionTitle}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
          <View style={styles.categoryGrid}>
            {categories.items.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={styles.categoryCard}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: cat.image.url }}
                  style={styles.categoryImg}
                />
                <Text style={styles.categoryTitle}>{cat.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FBFAFA" },
  scroll: { flex: 1, backgroundColor: "#FBFAFA" },

  headerBg: {
    width: "100%",
    paddingTop: 75,
    paddingBottom: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#3C3C4340",
  },
  headerContent: {
    paddingHorizontal: 24,
  },
  greeting: { fontSize: 16, fontFamily: Fonts.regular, color: "#13231B" },
  title: {
    fontSize: 24,
    fontFamily: Fonts.medium,
    marginTop: 4,
    color: "#13231B",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFFE0",
    gap: 8,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#3C3C4340",
  },
  searchInput: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: "#13231B",
    height: 44,
  },
  searchIcon: { width: 20, height: 20 },

  premiumBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24201A",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 12,
    marginTop: 20,
    marginBottom: 20,
    height: 64,
  },
  bannerIcon: { width: 36, marginRight: 12, resizeMode: "contain" },
  bannerTitle: { color: "#E5C990", fontFamily: Fonts.bold, fontSize: 16 },
  bannerSubtitle: { color: "#F5C25B", fontFamily: Fonts.regular, fontSize: 13 },
  bannerArrow: { color: "#fff", fontSize: 20, marginLeft: 8 },

  sectionTitle: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    marginHorizontal: 16,
    marginBottom: 20,
    color: "#13231B",
  },

  questionCard: {
    width: 240,
    height: 164,
    borderRadius: 14,
    marginRight: 16,
    overflow: "hidden",
    backgroundColor: "#ddd",
  },
  questionImg: { width: "100%", height: "100%", justifyContent: "flex-end" },
  questionOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000033",
  },
  questionTitle: {
    color: "#fff",
    fontFamily: Fonts.regular,
    fontSize: 15,
  },

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  categoryCard: {
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
  categoryImg: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  categoryTitle: {
    width: "70%",
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: "#13231B",
  },
});
