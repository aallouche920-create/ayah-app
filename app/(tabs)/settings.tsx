import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Linking,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ACHIEVEMENT_RULES } from "@/context/AppContext";
import { LANGUAGES, getStrings } from "@/constants/i18n";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

export default function SettingsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const {
    language,
    setLanguage,
    themePreference,
    setThemePreference,
    streak,
    favorites,
    tasbeehDailyTotal,
    unlockedAchievements,
  } = useApp();
  const t = getStrings(language);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  const isDark =
    themePreference === "dark" ||
    (themePreference === "auto" && colorScheme === "dark");

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  const currentLang = LANGUAGES.find((l) => l.code === language);

  const allAchievements = ACHIEVEMENT_RULES.map((rule) => ({
    ...rule,
    unlocked: unlockedAchievements.includes(rule.id),
  }));

  return (
    <View style={[styles.container, { backgroundColor: isDark ? colors.background : "#F5F0E8" }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: topPadding + 16, paddingBottom: 90 + bottomPadding },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { color: colors.foreground }]}>
          {t.settings}
        </Text>

        {/* Stats */}
        <View style={[styles.statsCard, { backgroundColor: isDark ? colors.card : "#FFFFFF" }]}>
          <View style={[styles.cardAccent, { backgroundColor: colors.gold }]} />
          <View style={styles.statsGrid}>
            <StatItem value={streak.current} label={t.dayStreak} icon="zap" colors={colors} isDark={isDark} />
            <StatItem value={streak.longest} label={t.longestStreak} icon="award" colors={colors} isDark={isDark} />
            <StatItem value={streak.totalDaysRead} label={t.totalVerses} icon="book-open" colors={colors} isDark={isDark} />
            <StatItem value={favorites.length} label={t.favorites} icon="heart" colors={colors} isDark={isDark} />
          </View>
        </View>

        {/* Language */}
        <SectionTitle label={t.language} colors={colors} />
        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            setShowLanguage(true);
          }}
          style={[styles.settingRow, { backgroundColor: isDark ? colors.card : "#FFFFFF", borderColor: colors.border }]}
        >
          <View style={[styles.settingIcon, { backgroundColor: isDark ? colors.secondary : colors.goldLight }]}>
            <Feather name="globe" size={16} color={colors.gold} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.settingLabel, { color: colors.foreground }]}>
              {t.language}
            </Text>
            <Text style={[styles.settingValue, { color: colors.mutedForeground }]}>
              {currentLang ? `${currentLang.flag} ${currentLang.nativeName}` : language}
            </Text>
          </View>
          <Feather name="chevron-right" size={16} color={colors.mutedForeground} />
        </TouchableOpacity>

        {/* Theme */}
        <SectionTitle label={t.theme} colors={colors} />
        <View style={[styles.themeRow, { backgroundColor: isDark ? colors.card : "#FFFFFF", borderColor: colors.border }]}>
          {(["auto", "light", "dark"] as const).map((opt) => (
            <TouchableOpacity
              key={opt}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                setThemePreference(opt);
              }}
              style={[
                styles.themeBtn,
                themePreference === opt && {
                  backgroundColor: colors.primary,
                },
              ]}
            >
              <Feather
                name={opt === "auto" ? "smartphone" : opt === "light" ? "sun" : "moon"}
                size={14}
                color={themePreference === opt ? colors.primaryForeground : colors.mutedForeground}
              />
              <Text
                style={[
                  styles.themeBtnText,
                  { color: themePreference === opt ? colors.primaryForeground : colors.mutedForeground },
                ]}
              >
                {opt === "auto" ? t.themeAuto : opt === "light" ? t.themeLight : t.themeDark}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Achievements */}
        <SectionTitle label={t.achievements} colors={colors} />
        <TouchableOpacity
          onPress={() => setShowAchievements(true)}
          style={[styles.settingRow, { backgroundColor: isDark ? colors.card : "#FFFFFF", borderColor: colors.border }]}
        >
          <View style={[styles.settingIcon, { backgroundColor: isDark ? colors.secondary : colors.goldLight }]}>
            <Feather name="award" size={16} color={colors.gold} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.settingLabel, { color: colors.foreground }]}>
              {t.badgesEarned}
            </Text>
            <Text style={[styles.settingValue, { color: colors.mutedForeground }]}>
              {unlockedAchievements.length} / {ACHIEVEMENT_RULES.length} unlocked
            </Text>
          </View>
          <View style={styles.badgesPreview}>
            {allAchievements
              .filter((a) => a.unlocked)
              .slice(0, 3)
              .map((a) => (
                <View
                  key={a.id}
                  style={[styles.miniBadge, { backgroundColor: colors.goldLight }]}
                >
                  <Feather name={a.icon as any} size={10} color={colors.gold} />
                </View>
              ))}
          </View>
          <Feather name="chevron-right" size={16} color={colors.mutedForeground} />
        </TouchableOpacity>

        {/* About */}
        <SectionTitle label={t.aboutApp} colors={colors} />
        <View style={[styles.card, { backgroundColor: isDark ? colors.card : "#FFFFFF", borderColor: colors.border }]}>
          <AboutRow
            icon="info"
            label="Ayah of the Day"
            value="Version 1.0.0"
            colors={colors}
            isDark={isDark}
          />
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <AboutRow
            icon="heart"
            label={t.donate}
            value="Support development"
            colors={colors}
            isDark={isDark}
            onPress={() =>
              Platform.OS !== "web" &&
              Linking.openURL("https://ko-fi.com")
            }
          />
        </View>

        {/* Footer */}
        <Text style={[styles.footer, { color: colors.mutedForeground }]}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </Text>
        <Text style={[styles.footerSub, { color: colors.mutedForeground }]}>
          Made with love for the Ummah
        </Text>
      </ScrollView>

      {/* Language Modal */}
      <Modal visible={showLanguage} animationType="slide" presentationStyle="pageSheet">
        <View style={[styles.modalContainer, { backgroundColor: isDark ? colors.background : "#F5F0E8" }]}>
          <View style={[styles.modalHeader, { borderBottomColor: colors.border }]}>
            <Text style={[styles.modalTitle, { color: colors.foreground }]}>
              {t.language}
            </Text>
            <TouchableOpacity onPress={() => setShowLanguage(false)}>
              <Feather name="x" size={22} color={colors.foreground} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {LANGUAGES.map((lang) => (
              <TouchableOpacity
                key={lang.code}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setLanguage(lang.code);
                  setShowLanguage(false);
                }}
                style={[
                  styles.langRow,
                  {
                    backgroundColor:
                      language === lang.code
                        ? isDark
                          ? "#1A3320"
                          : "#E8F5E9"
                        : "transparent",
                    borderBottomColor: colors.border,
                  },
                ]}
              >
                <Text style={styles.langFlag}>{lang.flag}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.langName, { color: colors.foreground }]}>
                    {lang.nativeName}
                  </Text>
                  <Text style={[styles.langEnName, { color: colors.mutedForeground }]}>
                    {lang.name}
                  </Text>
                </View>
                {language === lang.code && (
                  <Feather name="check" size={18} color={colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      {/* Achievements Modal */}
      <Modal visible={showAchievements} animationType="slide" presentationStyle="pageSheet">
        <View style={[styles.modalContainer, { backgroundColor: isDark ? colors.background : "#F5F0E8" }]}>
          <View style={[styles.modalHeader, { borderBottomColor: colors.border }]}>
            <Text style={[styles.modalTitle, { color: colors.foreground }]}>
              {t.achievements}
            </Text>
            <TouchableOpacity onPress={() => setShowAchievements(false)}>
              <Feather name="x" size={22} color={colors.foreground} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={{ padding: 20, gap: 10 }}>
            {allAchievements.map((ach) => (
              <View
                key={ach.id}
                style={[
                  styles.achCard,
                  {
                    backgroundColor: ach.unlocked
                      ? isDark
                        ? "#1A3320"
                        : "#E8F5E9"
                      : isDark
                      ? colors.card
                      : "#FFFFFF",
                    borderColor: ach.unlocked ? "#66BB6A" : colors.border,
                    opacity: ach.unlocked ? 1 : 0.6,
                  },
                ]}
              >
                <View
                  style={[
                    styles.achIcon,
                    {
                      backgroundColor: ach.unlocked
                        ? "#43A047"
                        : isDark
                        ? colors.secondary
                        : "#F0EBE0",
                    },
                  ]}
                >
                  <Feather
                    name={ach.icon as any}
                    size={20}
                    color={ach.unlocked ? "#FFFFFF" : colors.mutedForeground}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.achLabel, { color: colors.foreground }]}>
                    {ach.label}
                  </Text>
                  <Text style={[styles.achStatus, { color: colors.mutedForeground }]}>
                    {ach.unlocked ? "Unlocked" : "Locked"}
                  </Text>
                </View>
                {ach.unlocked && (
                  <View style={[styles.goldBadge, { backgroundColor: colors.goldLight }]}>
                    <Feather name="star" size={12} color={colors.gold} />
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

function SectionTitle({ label, colors }: { label: string; colors: ReturnType<typeof useColors> }) {
  return (
    <Text style={[styles.sectionTitle, { color: colors.mutedForeground }]}>
      {label.toUpperCase()}
    </Text>
  );
}

function StatItem({
  value,
  label,
  icon,
  colors,
  isDark,
}: {
  value: number;
  label: string;
  icon: string;
  colors: ReturnType<typeof useColors>;
  isDark: boolean;
}) {
  return (
    <View style={styles.statItem}>
      <View style={[styles.statIcon, { backgroundColor: isDark ? colors.secondary : colors.goldLight }]}>
        <Feather name={icon as any} size={14} color={colors.gold} />
      </View>
      <Text style={[styles.statValue, { color: colors.foreground }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{label}</Text>
    </View>
  );
}

function AboutRow({
  icon,
  label,
  value,
  colors,
  isDark,
  onPress,
}: {
  icon: string;
  label: string;
  value: string;
  colors: ReturnType<typeof useColors>;
  isDark: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={styles.aboutRow}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={[styles.settingIcon, { backgroundColor: isDark ? colors.secondary : colors.goldLight }]}>
        <Feather name={icon as any} size={16} color={colors.gold} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.settingLabel, { color: colors.foreground }]}>{label}</Text>
        <Text style={[styles.settingValue, { color: colors.mutedForeground }]}>{value}</Text>
      </View>
      {onPress && <Feather name="external-link" size={14} color={colors.mutedForeground} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20, gap: 10 },
  title: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    marginBottom: 6,
  },
  statsCard: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 6,
  },
  cardAccent: { height: 3 },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
    gap: 8,
  },
  statItem: {
    width: "47%",
    alignItems: "center",
    padding: 12,
    gap: 4,
  },
  statIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
  },
  statLabel: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.8,
    marginTop: 6,
    marginBottom: 4,
    paddingHorizontal: 4,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    gap: 12,
  },
  settingIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  settingLabel: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  settingValue: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginTop: 1,
  },
  themeRow: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    padding: 5,
    gap: 4,
  },
  themeBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 9,
    borderRadius: 10,
  },
  themeBtnText: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
  badgesPreview: {
    flexDirection: "row",
    gap: 4,
    marginRight: 8,
  },
  miniBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },
  divider: { height: 1, marginHorizontal: 14 },
  aboutRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 12,
  },
  footer: {
    textAlign: "center",
    fontFamily: "Amiri_400Regular",
    fontSize: 18,
    marginTop: 16,
  },
  footerSub: {
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  modalContainer: { flex: 1 },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
  },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 14,
    borderBottomWidth: 1,
  },
  langFlag: { fontSize: 24 },
  langName: {
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
  langEnName: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginTop: 1,
  },
  achCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    gap: 14,
  },
  achIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  achLabel: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  achStatus: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  },
  goldBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
