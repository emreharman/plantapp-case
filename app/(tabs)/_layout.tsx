import Scan from "@/assets/images/scan.png";
import SvgDiagnose from "@/components/icons/Diagnose";
import SvgHome from "@/components/icons/Home";
import SvgMyGarden from "@/components/icons/MyGarden";
import SvgProfile from "@/components/icons/Profile";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <SvgHome width={24} height={24} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          title: "Diagnose",
          tabBarIcon: ({ color }) => (
            <SvgDiagnose width={24} height={24} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "",
          tabBarIcon: () => (
            <View style={styles.scanButton}>
              <Image source={Scan} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="garden"
        options={{
          title: "My Garden",
          tabBarIcon: ({ color }) => (
            <SvgMyGarden width={24} height={24} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <SvgProfile width={24} height={24} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  scanButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.light.tint,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
