import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  FlatList,
  Platform,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getStrings } from "@/constants/i18n";
import { AYAHS, type Ayah } from "@/constants/quranData";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

export default function FavoritesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const { language, favorites, toggleFavorite, themePreference } = useApp();
  const t = getStrings(language);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const isDark =
    themePreference === "dark" ||
    (themePreference === "auto" && colorScheme === "dark");

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  const savedAyahs = AYAHS.filter((a) => favorites.includes(a.id));

  const handleShare = async (ayah: Ayah) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const translation = ayah.translations[language] || ayah.translations["en"];
    const text = `✨ ${ayah.arabicText}\n\n"${translation}"\n\n— ${ayah.surahName} ${ayah.surahNumber}:${ayah.ayahNumber}\n\n📱 Ayah of the Day`;
    await Share.share({ message: text });
  };

  const handleRemove = (ayahId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleFavorite(ayahId);
  };

  if (savedAyahs.length === 0) {
    return (
      <View
        style={[
          styles.emptyContainer,
          {
            backgroundColor: isDark ? colors.background : "#F5F0E8",
            paddingTop: topPadding,
          },
        ]}
      >
        <Text style={[styles.title, { color: colors.foreground, alignSelf: "flex-start", paddingHorizontal: 20 }]}>
          {t.favorites}
        </Text>
        <View style={styles.emptyInner}>
          <View style={[styles.emptyIcon, { backgroundColor: isDark ? colors.card : "#FFFFFF" }]}>
            <Feather name="heart" size={32} color={colors.gold} />
          </View>
          <Text style={[styles.emptyTitle, { color: colors.foreground }]}>
            {t.noFavorites}
          </Text>
          <Text style={[styles.emptySubtitle, { color: colors.mutedForeground }]}>
            {t.noFavoritesSubtitle}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: isDark ? colors.background : "#F5F0E8" }]}>
      <FlatList
        data={savedAyahs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.list,
          { paddingTop: topPadding + 16, paddingBottom: 90 + bottomPadding },
        ]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={[styles.title, { color: colors.foreground }]}>
            {t.favorites}
            {"  "}
            <Text style={[styles.count, { color: colors.gold }]}>
              {savedAyahs.length}
            </Text>
          </Text>
        }
        renderItem={({ item }) => {
          const translation = item.translations[language] || item.translations["en"];
          const expanded = expandedId === item.id;

          return (
            <TouchableOpacity
              onPress={() => setExpandedId(expanded ? null : item.id)}
              activeOpacity={0.85}
              style={[
                styles.card,
                {
                  backgroundColor: isDark ? colors.card : "#FFFFFF",
                  borderColor: expanded ? colors.gold : colors.border,
                },
              ]}
            >
              {/* Gold accent */}
              <View style={[styles.cardAccent, { backgroundColor: colors.gold }]} />

              <View style={styles.cardBody}>
                {/* Arabic */}
                <Text
                  style={[styles.arabicText, { color: colors.foreground }]}
                  numberOfLines={expanded ? undefined : 2}
                >
                  {item.arabicText}
                </Text>

                {/* Translation */}
                <Text
                  style={[styles.translationText, { color: colors.mutedForeground }]}
                  numberOfLines={expanded ? undefined : 2}
                >
                  "{translation}"
                </Text>

                {/* Reference & Actions */}
                <View style={styles.cardFooter}>
                  <View style={[styles.refTag, { backgroundColor: isDark ? colors.secondary : "#F0EBD8" }]}>
                    <Text style={[styles.refText, { color: colors.gold }]}>
                      {item.surahName} {item.surahNumber}:{item.ayahNumber}
                    </Text>
                  </View>

                  <View style={styles.cardActions}>
                    <TouchableOpacity
                      onPress={() => handleShare(item)}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Feather name="share-2" size={15} color={colors.mutedForeground} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleRemove(item.id)}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Feather name="heart" size={15} color="#E53935" />
                    </TouchableOpacity>
                  </View>
                </View>

                {expanded && (
                  <View style={[styles.tafsirBox, { backgroundColor: isDark ? colors.secondary : "#FAF7F0" }]}>
                    <Text style={[styles.tafsirText, { color: colors.mutedForeground }]}>
                      {item.tafsir}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  emptyContainer: { flex: 1 },
  emptyInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    gap: 12,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 20,
  },
  list: {
    paddingHorizontal: 20,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    marginBottom: 16,
  },
  count: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  cardAccent: {
    height: 3,
  },
  cardBody: {
    padding: 16,
  },
  arabicText: {
    fontFamily: "Amiri_400Regular",
    fontSize: 20,
    lineHeight: 36,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 10,
  },
  translationText: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  refTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  refText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
  },
  cardActions: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  tafsirBox: {
    marginTop: 12,
    padding: 12,
    borderRadius: 10,
  },
  tafsirText: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },
});
