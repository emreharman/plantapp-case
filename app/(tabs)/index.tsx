import CategoryCard from "@/components/categoryCard";
import HomeHeader from "@/components/homeHeader";
import Loading from "@/components/loading";
import PremiumBanner from "@/components/premiumBanner";
import QuestionCard from "@/components/questionCard";
import Fonts from "@/constants/fonts";
import { useCategories } from "@/hooks/useCategories";
import { useQuestions } from "@/hooks/useQuestions";
import { useAppDispatch } from "@/store/hooks";
import { fetchCategories } from "@/store/slices/category.slice";
import { fetchQuestions } from "@/store/slices/question.slice";
import { useCallback, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
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
        <HomeHeader />
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <PremiumBanner />
          <Text style={styles.sectionTitle}>Get Started</Text>
          <FlatList
            data={questions.items}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              <QuestionCard title={item.title} imageUri={item.image_uri} />
            )}
          />

          <View style={styles.categoryGrid}>
            {categories.items.map((cat) => (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                imageUrl={cat.image.url}
              />
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
  sectionTitle: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    marginHorizontal: 16,
    marginBottom: 20,
    color: "#13231B",
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },
});
