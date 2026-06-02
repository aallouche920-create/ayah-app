import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { DEFAULT_LANGUAGE } from "@/constants/i18n";

type ThemePreference = "auto" | "light" | "dark";

interface StreakData {
  current: number;
  longest: number;
  lastDate: string;
  totalDaysRead: number;
}

interface AppState {
  language: string;
  themePreference: ThemePreference;
  favorites: string[];
  completedAdhkar: Record<string, string[]>;
  tasbeehCount: number;
  tasbeehDailyTotal: number;
  tasbeehLastDate: string;
  streak: StreakData;
  unlockedAchievements: string[];
  hasReadToday: boolean;
}

interface AppContextValue extends AppState {
  setLanguage: (lang: string) => void;
  setThemePreference: (theme: ThemePreference) => void;
  toggleFavorite: (ayahId: string) => void;
  isFavorite: (ayahId: string) => boolean;
  toggleAdhkar: (dhikrId: string, session: string) => void;
  isAdhkarCompleted: (dhikrId: string, session: string) => boolean;
  incrementTasbeeh: () => void;
  resetTasbeeh: () => void;
  markAsRead: () => void;
}

const defaultStreak: StreakData = {
  current: 0,
  longest: 0,
  lastDate: "",
  totalDaysRead: 0,
};

const defaultState: AppState = {
  language: DEFAULT_LANGUAGE,
  themePreference: "auto",
  favorites: [],
  completedAdhkar: {},
  tasbeehCount: 0,
  tasbeehDailyTotal: 0,
  tasbeehLastDate: "",
  streak: defaultStreak,
  unlockedAchievements: [],
  hasReadToday: false,
};

const STORAGE_KEY = "ayah_app_state_v2";

const AppContext = createContext<AppContextValue>({
  ...defaultState,
  setLanguage: () => {},
  setThemePreference: () => {},
  toggleFavorite: () => {},
  isFavorite: () => false,
  toggleAdhkar: () => {},
  isAdhkarCompleted: () => false,
  incrementTasbeeh: () => {},
  resetTasbeeh: () => {},
  markAsRead: () => {},
});

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const ACHIEVEMENT_RULES: Array<{
  id: string;
  label: string;
  icon: string;
  check: (state: AppState) => boolean;
}> = [
  {
    id: "first_read",
    label: "First Step",
    icon: "book-open",
    check: (s) => s.streak.totalDaysRead >= 1,
  },
  {
    id: "streak_3",
    label: "3-Day Reader",
    icon: "zap",
    check: (s) => s.streak.current >= 3,
  },
  {
    id: "streak_7",
    label: "Week Warrior",
    icon: "award",
    check: (s) => s.streak.current >= 7,
  },
  {
    id: "streak_30",
    label: "Monthly Devotee",
    icon: "star",
    check: (s) => s.streak.current >= 30,
  },
  {
    id: "streak_100",
    label: "Century Scholar",
    icon: "trophy",
    check: (s) => s.streak.current >= 100,
  },
  {
    id: "favorites_5",
    label: "Verse Collector",
    icon: "heart",
    check: (s) => s.favorites.length >= 5,
  },
  {
    id: "favorites_20",
    label: "Quran Lover",
    icon: "bookmark",
    check: (s) => s.favorites.length >= 20,
  },
  {
    id: "tasbeeh_100",
    label: "Remembrance",
    icon: "refresh-cw",
    check: (s) => s.tasbeehDailyTotal >= 100,
  },
  {
    id: "tasbeeh_1000",
    label: "Devoted Rememberer",
    icon: "layers",
    check: (s) => s.tasbeehDailyTotal >= 1000,
  },
  {
    id: "total_7",
    label: "Consistent Reader",
    icon: "calendar",
    check: (s) => s.streak.totalDaysRead >= 7,
  },
];

export { ACHIEVEMENT_RULES };

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) {
          const saved = JSON.parse(raw) as Partial<AppState>;
          const today = getTodayString();
          const hasReadToday = saved.streak?.lastDate === today;
          setState({ ...defaultState, ...saved, hasReadToday });
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  const save = useCallback((next: AppState) => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const update = useCallback(
    (updater: (prev: AppState) => AppState) => {
      setState((prev) => {
        const next = updater(prev);
        save(next);
        return next;
      });
    },
    [save]
  );

  const checkAchievements = useCallback(
    (current: AppState): string[] => {
      const newUnlocked = [...current.unlockedAchievements];
      for (const rule of ACHIEVEMENT_RULES) {
        if (!newUnlocked.includes(rule.id) && rule.check(current)) {
          newUnlocked.push(rule.id);
        }
      }
      return newUnlocked;
    },
    []
  );

  const setLanguage = useCallback(
    (lang: string) => update((p) => ({ ...p, language: lang })),
    [update]
  );

  const setThemePreference = useCallback(
    (theme: ThemePreference) => update((p) => ({ ...p, themePreference: theme })),
    [update]
  );

  const toggleFavorite = useCallback(
    (ayahId: string) => {
      update((p) => {
        const isFav = p.favorites.includes(ayahId);
        const favorites = isFav
          ? p.favorites.filter((id) => id !== ayahId)
          : [...p.favorites, ayahId];
        const next = { ...p, favorites };
        return { ...next, unlockedAchievements: checkAchievements(next) };
      });
    },
    [update, checkAchievements]
  );

  const isFavorite = useCallback(
    (ayahId: string) => state.favorites.includes(ayahId),
    [state.favorites]
  );

  const toggleAdhkar = useCallback(
    (dhikrId: string, session: string) => {
      update((p) => {
        const key = `${getTodayString()}_${session}`;
        const current = p.completedAdhkar[key] || [];
        const updated = current.includes(dhikrId)
          ? current.filter((id) => id !== dhikrId)
          : [...current, dhikrId];
        return {
          ...p,
          completedAdhkar: { ...p.completedAdhkar, [key]: updated },
        };
      });
    },
    [update]
  );

  const isAdhkarCompleted = useCallback(
    (dhikrId: string, session: string) => {
      const key = `${getTodayString()}_${session}`;
      return (state.completedAdhkar[key] || []).includes(dhikrId);
    },
    [state.completedAdhkar]
  );

  const incrementTasbeeh = useCallback(() => {
    update((p) => {
      const today = getTodayString();
      const isNewDay = p.tasbeehLastDate !== today;
      const count = p.tasbeehCount + 1;
      const dailyTotal = isNewDay ? 1 : p.tasbeehDailyTotal + 1;
      const next = {
        ...p,
        tasbeehCount: count,
        tasbeehDailyTotal: dailyTotal,
        tasbeehLastDate: today,
      };
      return { ...next, unlockedAchievements: checkAchievements(next) };
    });
  }, [update, checkAchievements]);

  const resetTasbeeh = useCallback(() => {
    update((p) => ({ ...p, tasbeehCount: 0 }));
  }, [update]);

  const markAsRead = useCallback(() => {
    update((p) => {
      const today = getTodayString();
      if (p.streak.lastDate === today) return p;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;

      const isConsecutive = p.streak.lastDate === yesterdayStr;
      const current = isConsecutive ? p.streak.current + 1 : 1;
      const longest = Math.max(p.streak.longest, current);
      const totalDaysRead = p.streak.totalDaysRead + 1;

      const streak: StreakData = { current, longest, lastDate: today, totalDaysRead };
      const next = { ...p, streak, hasReadToday: true };
      return { ...next, unlockedAchievements: checkAchievements(next) };
    });
  }, [update, checkAchievements]);

  if (!loaded) return null;

  return (
    <AppContext.Provider
      value={{
        ...state,
        setLanguage,
        setThemePreference,
        toggleFavorite,
        isFavorite,
        toggleAdhkar,
        isAdhkarCompleted,
        incrementTasbeeh,
        resetTasbeeh,
        markAsRead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
