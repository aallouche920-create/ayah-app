import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getStrings } from "@/constants/i18n";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

const PRESETS = [
  { label: "SubhanAllah", arabic: "سُبْحَانَ اللَّهِ", target: 33 },
  { label: "Alhamdulillah", arabic: "الْحَمْدُ لِلَّهِ", target: 33 },
  { label: "Allahu Akbar", arabic: "اللَّهُ أَكْبَرُ", target: 33 },
  { label: "La ilaha illa Allah", arabic: "لَا إِلَهَ إِلَّا اللَّهُ", target: 100 },
  { label: "Astaghfirullah", arabic: "أَسْتَغْفِرُ اللَّهَ", target: 100 },
  { label: "Custom", arabic: "ذِكْر", target: 99 },
];

export default function TasbeehScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const { language, tasbeehCount, tasbeehDailyTotal, incrementTasbeeh, resetTasbeeh, themePreference } = useApp();
  const t = getStrings(language);
  const [selectedPreset, setSelectedPreset] = useState(0);

  const isDark =
    themePreference === "dark" ||
    (themePreference === "auto" && colorScheme === "dark");

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const ringAnim = useRef(new Animated.Value(0)).current;

  const preset = PRESETS[selectedPreset];
  const progress = Math.min((tasbeehCount % (preset.target + 1)) / preset.target, 1);
  const cyclesComplete = Math.floor(tasbeehCount / preset.target);

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    incrementTasbeeh();

    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 0.92,
        friction: 5,
        tension: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 200,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.sequence([
      Animated.timing(ringAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      Animated.timing(ringAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start();
  };

  const handleReset = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    resetTasbeeh();
  };

  const ringScale = ringAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.12] });
  const ringOpacity = ringAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 0.4] });

  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? colors.background : "#F5F0E8", paddingTop: topPadding },
      ]}
    >
      {/* Title */}
      <Text style={[styles.title, { color: colors.foreground }]}>{t.tasbeeh}</Text>

      {/* Preset Selector */}
      <View style={styles.presetsRow}>
        {PRESETS.map((p, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setSelectedPreset(idx);
            }}
            style={[
              styles.presetChip,
              {
                backgroundColor:
                  idx === selectedPreset
                    ? colors.primary
                    : isDark
                    ? colors.card
                    : "#FFFFFF",
                borderColor: idx === selectedPreset ? colors.primary : colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.presetChipText,
                { color: idx === selectedPreset ? colors.primaryForeground : colors.mutedForeground },
              ]}
            >
              {p.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Main Counter Area */}
      <View style={styles.counterArea}>
        {/* Arabic label */}
        <Text style={[styles.arabicLabel, { color: colors.foreground }]}>
          {preset.arabic}
        </Text>

        {/* Circular Button */}
        <View style={styles.circleWrapper}>
          {/* Ring pulse animation */}
          <Animated.View
            style={[
              styles.ringPulse,
              {
                borderColor: colors.gold,
                transform: [{ scale: ringScale }],
                opacity: ringOpacity,
              },
            ]}
          />

          {/* SVG-like progress ring using border */}
          <View
            style={[
              styles.progressRingOuter,
              { borderColor: isDark ? colors.secondary : "#E8E0CF" },
            ]}
          >
            <View
              style={[
                styles.progressRingInner,
                {
                  borderColor: colors.gold,
                  borderTopColor: progress > 0.75 ? colors.gold : "transparent",
                  borderRightColor: progress > 0.25 ? colors.gold : "transparent",
                  borderBottomColor: progress > 0.5 ? colors.gold : "transparent",
                  borderLeftColor: colors.gold,
                  transform: [{ rotate: `${progress * 360}deg` }],
                },
              ]}
            />
          </View>

          {/* Main tap button */}
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.85}
              style={[
                styles.mainButton,
                {
                  backgroundColor: isDark ? colors.card : "#FFFFFF",
                  shadowColor: colors.gold,
                },
              ]}
            >
              <Text style={[styles.counterNumber, { color: colors.foreground }]}>
                {tasbeehCount % (preset.target + 1) === 0 && tasbeehCount > 0
                  ? preset.target
                  : tasbeehCount % (preset.target + 1)}
              </Text>
              <Text style={[styles.counterTarget, { color: colors.gold }]}>
                / {preset.target}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Cycles & Daily Total */}
        <View style={styles.statsRow}>
          <View style={[styles.statItem, { backgroundColor: isDark ? colors.card : "#FFFFFF" }]}>
            <Text style={[styles.statValue, { color: colors.gold }]}>{cyclesComplete}</Text>
            <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>Cycles</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
          <View style={[styles.statItem, { backgroundColor: isDark ? colors.card : "#FFFFFF" }]}>
            <Text style={[styles.statValue, { color: colors.gold }]}>{tasbeehDailyTotal}</Text>
            <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t.totalCount}</Text>
          </View>
        </View>
      </View>

      {/* Reset Button */}
      <TouchableOpacity
        onPress={handleReset}
        style={[
          styles.resetBtn,
          {
            backgroundColor: isDark ? colors.card : "#FFFFFF",
            borderColor: colors.border,
            marginBottom: 90 + bottomPadding,
          },
        ]}
      >
        <Feather name="rotate-ccw" size={15} color={colors.mutedForeground} />
        <Text style={[styles.resetText, { color: colors.mutedForeground }]}>{t.reset}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    alignSelf: "flex-start",
    marginBottom: 16,
    marginTop: 12,
  },
  presetsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignSelf: "stretch",
    marginBottom: 24,
  },
  presetChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  presetChipText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  counterArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  arabicLabel: {
    fontFamily: "Amiri_400Regular",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 24,
    writingDirection: "rtl",
  },
  circleWrapper: {
    width: 260,
    height: 260,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  ringPulse: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
  },
  progressRingOuter: {
    position: "absolute",
    width: 248,
    height: 248,
    borderRadius: 124,
    borderWidth: 8,
  },
  progressRingInner: {
    position: "absolute",
    width: 248,
    height: 248,
    borderRadius: 124,
    borderWidth: 8,
  },
  mainButton: {
    width: 210,
    height: 210,
    borderRadius: 105,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 8,
  },
  counterNumber: {
    fontSize: 56,
    fontFamily: "Inter_700Bold",
    lineHeight: 64,
  },
  counterTarget: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    overflow: "hidden",
    width: "80%",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
  },
  statDivider: {
    width: 1,
    height: 40,
  },
  statValue: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
  },
  statLabel: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  },
  resetBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1,
  },
  resetText: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
  },
});
