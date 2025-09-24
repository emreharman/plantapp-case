import Loading from "@/components/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasOnboarded, setHasOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const value = await AsyncStorage.getItem("hasOnboarded");
      setHasOnboarded(value === "true");
      setIsLoading(false);
    };
    checkOnboarding();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return hasOnboarded ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/onboarding" />
  );
};

export default Index;
