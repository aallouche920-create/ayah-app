import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getStrings } from "@/constants/i18n";
import { getDailyAyah } from "@/constants/quranData";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

const SECTIONS = ["arabic", "transliteration", "translation", "tafsir"] as const;

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const { language, isFavorite, toggleFavorite, markAsRead, streak, themePreference } = useApp();
  const t = getStrings(language);
  const ayah = getDailyAyah();

  const isDark =
    themePreference === "dark" ||
    (themePreference === "auto" && colorScheme === "dark");

  const [expandedSection, setExpandedSection] = useState<string | null>("translation");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.96)).current;
  const favorited = isFavorite(ayah.id);

  useEffect(() => {
    markAsRead();
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleFavorite = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    toggleFavorite(ayah.id);
  };

  const handleShare = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const translation =
      ayah.translations[language] || ayah.translations["en"];
    const text = `✨ ${ayah.arabicText}\n\n"${translation}"\n\n— ${ayah.surahName} ${ayah.surahNumber}:${ayah.ayahNumber}\n\n📱 Ayah of the Day`;
    await Share.share({ message: text });
  };

  const translation =
    ayah.translations[language] || ayah.translations["en"];

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  return (
    <View style={[styles.container, { backgroundColor: isDark ? colors.background : "#F5F0E8" }]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: topPadding + 16, paddingBottom: 90 + bottomPadding },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.headerDate, { color: colors.gold }]}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </Text>
            <Text style={[styles.headerTitle, { color: colors.foreground }]}>
              {t.dailyAyah}
            </Text>
          </View>
          {streak.current > 0 && (
            <View style={[styles.streakBadge, { backgroundColor: colors.goldLight }]}>
              <Feather name="zap" size={14} color={colors.gold} />
              <Text style={[styles.streakText, { color: colors.gold }]}>
                {streak.current}
              </Text>
            </View>
          )}
        </View>

        {/* Arabic Card */}
        <Animated.View
          style={[
            styles.arabicCard,
            {
              backgroundColor: isDark ? colors.card : "#FFFFFF",
              shadowColor: isDark ? "#000" : "#C9A84C",
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* Decorative top border */}
          <View style={[styles.cardAccent, { backgroundColor: colors.gold }]} />

          {/* Bismillah */}
          <Text style={[styles.bismillah, { color: colors.gold }]}>
            ﷽
          </Text>

          {/* Arabic text */}
          <Text style={[styles.arabicText, { color: colors.foreground }]}>
            {ayah.arabicText}
          </Text>

          {/* Reference */}
          <View style={[styles.referenceTag, { backgroundColor: isDark ? colors.secondary : "#F0EBD8" }]}>
            <Text style={[styles.referenceText, { color: colors.gold }]}>
              {ayah.surahNameArabic} • {ayah.surahNumber}:{ayah.ayahNumber}
            </Text>
          </View>

          <View style={[styles.cardDivider, { backgroundColor: colors.border }]} />

          <Text style={[styles.surahName, { color: colors.mutedForeground }]}>
            {ayah.surahName} — {t.verse} {ayah.ayahNumber}
          </Text>
        </Animated.View>

        {/* Action Row */}
        <Animated.View style={[styles.actionRow, { opacity: fadeAnim }]}>
          <TouchableOpacity
            onPress={handleFavorite}
            style={[
              styles.actionBtn,
              {
                backgroundColor: favorited
                  ? (isDark ? "#2D1F1F" : "#FFF0F0")
                  : (isDark ? colors.card : "#FFFFFF"),
                borderColor: favorited ? "#E57373" : colors.border,
              },
            ]}
          >
            <Feather
              name="heart"
              size={18}
              color={favorited ? "#E53935" : colors.mutedForeground}
            />
            <Text
              style={[
                styles.actionBtnText,
                { color: favorited ? "#E53935" : colors.mutedForeground },
              ]}
            >
              {favorited ? t.removeFavorite : t.addFavorite}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleShare}
            style={[
              styles.actionBtn,
              {
                backgroundColor: isDark ? colors.card : "#FFFFFF",
                borderColor: colors.border,
              },
            ]}
          >
            <Feather name="share-2" size={18} color={colors.mutedForeground} />
            <Text style={[styles.actionBtnText, { color: colors.mutedForeground }]}>
              {t.shareVerse}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Expandable Sections */}
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Transliteration */}
          <ExpandableSection
            title={t.transliteration}
            icon="mic"
            colors={colors}
            isDark={isDark}
            expanded={expandedSection === "transliteration"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "transliteration" ? null : "transliteration"
              )
            }
          >
            <Text style={[styles.transliterationText, { color: colors.foreground }]}>
              {ayah.transliteration}
            </Text>
          </ExpandableSection>

          {/* Translation */}
          <ExpandableSection
            title={t.translation}
            icon="globe"
            colors={colors}
            isDark={isDark}
            expanded={expandedSection === "translation"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "translation" ? null : "translation"
              )
            }
          >
            <Text style={[styles.translationText, { color: colors.foreground }]}>
              "{translation}"
            </Text>
          </ExpandableSection>

          {/* Tafsir */}
          <ExpandableSection
            title={t.tafsir}
            icon="book"
            colors={colors}
            isDark={isDark}
            expanded={expandedSection === "tafsir"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "tafsir" ? null : "tafsir"
              )
            }
          >
            <Text style={[styles.tafsirText, { color: colors.mutedForeground }]}>
              {ayah.tafsir}
            </Text>
          </ExpandableSection>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

function ExpandableSection({
  title,
  icon,
  children,
  expanded,
  onToggle,
  colors,
  isDark,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
  colors: ReturnType<typeof useColors>;
  isDark: boolean;
}) {
  const rotateAnim = useRef(new Animated.Value(expanded ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: expanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [expanded]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: isDark ? colors.card : "#FFFFFF",
          borderColor: expanded ? colors.gold : colors.border,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onToggle}
        style={styles.sectionHeader}
        activeOpacity={0.7}
      >
        <View style={styles.sectionHeaderLeft}>
          <View style={[styles.sectionIconBg, { backgroundColor: isDark ? colors.secondary : colors.goldLight }]}>
            <Feather name={icon as any} size={14} color={colors.gold} />
          </View>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            {title}
          </Text>
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Feather name="chevron-down" size={16} color={colors.mutedForeground} />
        </Animated.View>
      </TouchableOpacity>
      {expanded && (
        <View style={[styles.sectionContent, { borderTopColor: colors.border }]}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  headerDate: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
  },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  streakText: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  arabicCard: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  cardAccent: {
    height: 4,
    width: "100%",
  },
  bismillah: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 20,
    marginBottom: 4,
  },
  arabicText: {
    fontFamily: "Amiri_400Regular",
    fontSize: 28,
    lineHeight: 52,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    writingDirection: "rtl",
  },
  referenceTag: {
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 16,
  },
  referenceText: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
  cardDivider: {
    height: 1,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  surahName: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    paddingBottom: 16,
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  actionBtnText: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
  section: {
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 10,
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  sectionHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectionIconBg: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  transliterationText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    lineHeight: 24,
    fontStyle: "italic",
  },
  translationText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    lineHeight: 24,
  },
  tafsirText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
  },
});
