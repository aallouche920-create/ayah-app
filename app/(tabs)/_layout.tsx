import { BlurView } from "expo-blur";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { SymbolView } from "expo-symbols";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getStrings } from "@/constants/i18n";

function NativeTabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf={{ default: "book", selected: "book.fill" }} />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="adhkar">
        <Icon sf={{ default: "moon.stars", selected: "moon.stars.fill" }} />
        <Label>Adhkar</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tasbeeh">
        <Icon sf={{ default: "circle.dotted", selected: "circle.fill" }} />
        <Label>Tasbeeh</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="favorites">
        <Icon sf={{ default: "heart", selected: "heart.fill" }} />
        <Label>Saved</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf={{ default: "gearshape", selected: "gearshape.fill" }} />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function ClassicTabLayout() {
  const colors = useColors();
  const { language } = useApp();
  const t = getStrings(language);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.card,
          borderTopWidth: 0,
          borderTopColor: colors.border,
          elevation: 0,
          height: isWeb ? 84 : 65,
          paddingBottom: isWeb ? 34 : 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter_500Medium",
          fontSize: 10,
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView
              intensity={80}
              tint={isDark ? "dark" : "light"}
              style={StyleSheet.absoluteFill}
            />
          ) : (
            <View
              style={[StyleSheet.absoluteFill, { backgroundColor: isWeb ? colors.card : colors.card }]}
            />
          ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t.home,
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="book" tintColor={color} size={22} />
            ) : (
              <Feather name="book-open" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="adhkar"
        options={{
          title: t.adhkar,
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="moon.stars" tintColor={color} size={22} />
            ) : (
              <Feather name="moon" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="tasbeeh"
        options={{
          title: t.tasbeeh,
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="circle.dotted" tintColor={color} size={22} />
            ) : (
              <Feather name="refresh-cw" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: t.favorites,
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="heart" tintColor={color} size={22} />
            ) : (
              <Feather name="heart" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t.settings,
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="gearshape" tintColor={color} size={22} />
            ) : (
              <Feather name="settings" size={20} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  if (isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}
