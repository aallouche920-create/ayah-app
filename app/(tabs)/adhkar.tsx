import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { EVENING_ADHKAR, MORNING_ADHKAR, type Dhikr } from "@/constants/adhkarData";
import { getStrings } from "@/constants/i18n";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

type Session = "morning" | "evening";

export default function AdhkarScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const { language, toggleAdhkar, isAdhkarCompleted, themePreference } = useApp();
  const t = getStrings(language);
  const [session, setSession] = useState<Session>("morning");

  const isDark =
    themePreference === "dark" ||
    (themePreference === "auto" && colorScheme === "dark");

  const list = session === "morning" ? MORNING_ADHKAR : EVENING_ADHKAR;
  const sessionKey = session;
  const completedCount = list.filter((d) => isAdhkarCompleted(d.id, sessionKey)).length;
  const allDone = completedCount === list.length;

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  return (
    <View style={[styles.container, { backgroundColor: isDark ? colors.background : "#F5F0E8" }]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { paddingTop: topPadding + 12, backgroundColor: isDark ? colors.background : "#F5F0E8" },
        ]}
      >
        <Text style={[styles.title, { color: colors.foreground }]}>
          {session === "morning" ? t.morningAdhkar : t.eveningAdhkar}
        </Text>

        {/* Session Tabs */}
        <View style={[styles.tabs, { backgroundColor: isDark ? colors.card : "#EDE8DF" }]}>
          {(["morning", "evening"] as Session[]).map((s) => (
            <TouchableOpacity
              key={s}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                setSession(s);
              }}
              style={[
                styles.tab,
                session === s && { backgroundColor: colors.primary },
              ]}
            >
              <Feather
                name={s === "morning" ? "sun" : "moon"}
                size={14}
                color={session === s ? colors.primaryForeground : colors.mutedForeground}
              />
              <Text
                style={[
                  styles.tabText,
                  { color: session === s ? colors.primaryForeground : colors.mutedForeground },
                ]}
              >
                {s === "morning" ? t.morning : t.evening}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Progress */}
        <View style={styles.progressRow}>
          <Text style={[styles.progressText, { color: colors.mutedForeground }]}>
            {completedCount} / {list.length} {t.completed}
          </Text>
          <View style={[styles.progressBarBg, { backgroundColor: isDark ? colors.secondary : "#DDD8CE" }]}>
            <View
              style={[
                styles.progressBarFill,
                {
                  backgroundColor: allDone ? "#43A047" : colors.gold,
                  width: `${(completedCount / list.length) * 100}%`,
                },
              ]}
            />
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.list,
          { paddingBottom: 90 + bottomPadding },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {allDone && (
          <View style={[styles.allDoneBanner, { backgroundColor: isDark ? "#1A3320" : "#E8F5E9" }]}>
            <Feather name="check-circle" size={18} color="#43A047" />
            <Text style={[styles.allDoneText, { color: "#43A047" }]}>
              {t.allDone}
            </Text>
          </View>
        )}

        {list.map((dhikr, idx) => (
          <DhikrCard
            key={dhikr.id}
            dhikr={dhikr}
            session={sessionKey}
            isDark={isDark}
            colors={colors}
            index={idx}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function DhikrCard({
  dhikr,
  session,
  isDark,
  colors,
  index,
}: {
  dhikr: Dhikr;
  session: string;
  isDark: boolean;
  colors: ReturnType<typeof useColors>;
  index: number;
}) {
  const { toggleAdhkar, isAdhkarCompleted } = useApp();
  const completed = isAdhkarCompleted(dhikr.id, session);
  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => {
    Haptics.impactAsync(
      completed
        ? Haptics.ImpactFeedbackStyle.Light
        : Haptics.ImpactFeedbackStyle.Medium
    );
    toggleAdhkar(dhikr.id, session);
  };

  return (
    <TouchableOpacity
      onPress={() => setShowFull(!showFull)}
      activeOpacity={0.85}
      style={[
        styles.card,
        {
          backgroundColor: isDark
            ? completed
              ? "#142518"
              : colors.card
            : completed
            ? "#F1FBF2"
            : "#FFFFFF",
          borderColor: completed ? "#66BB6A" : colors.border,
          opacity: completed ? 0.9 : 1,
        },
      ]}
    >
      <View style={styles.cardInner}>
        {/* Count badge */}
        <View style={[styles.countBadge, { backgroundColor: isDark ? colors.secondary : colors.goldLight }]}>
          <Text style={[styles.countText, { color: colors.gold }]}>×{dhikr.count}</Text>
        </View>

        <View style={{ flex: 1, marginRight: 12 }}>
          <Text
            style={[
              styles.arabicDhikr,
              { color: completed ? colors.mutedForeground : colors.foreground },
            ]}
            numberOfLines={showFull ? undefined : 2}
          >
            {dhikr.arabicText}
          </Text>
          {showFull && (
            <>
              <Text style={[styles.transliterationDhikr, { color: colors.mutedForeground }]}>
                {dhikr.transliteration}
              </Text>
              <Text style={[styles.translationDhikr, { color: colors.mutedForeground }]}>
                {dhikr.translation}
              </Text>
              <Text style={[styles.benefitText, { color: colors.gold }]}>
                ✦ {dhikr.benefit}
              </Text>
            </>
          )}
        </View>

        <TouchableOpacity
          onPress={handleToggle}
          style={[
            styles.checkBtn,
            {
              backgroundColor: completed
                ? "#43A047"
                : isDark
                ? colors.secondary
                : "#F0EBE0",
              borderColor: completed ? "#43A047" : colors.border,
            },
          ]}
        >
          <Feather
            name="check"
            size={16}
            color={completed ? "#FFFFFF" : colors.mutedForeground}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    marginBottom: 14,
  },
  tabs: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 4,
    marginBottom: 14,
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 8,
    borderRadius: 9,
  },
  tabText: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
  progressRow: {
    gap: 6,
  },
  progressText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  progressBarBg: {
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 2,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 10,
  },
  allDoneBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 14,
    borderRadius: 12,
    marginBottom: 4,
  },
  allDoneText: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
  },
  cardInner: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  countBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    minWidth: 36,
    alignItems: "center",
    marginTop: 2,
  },
  countText: {
    fontSize: 11,
    fontFamily: "Inter_700Bold",
  },
  arabicDhikr: {
    fontFamily: "Amiri_400Regular",
    fontSize: 18,
    lineHeight: 32,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 4,
  },
  transliterationDhikr: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    marginBottom: 4,
    lineHeight: 18,
  },
  translationDhikr: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    marginBottom: 6,
  },
  benefitText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  checkBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
});
