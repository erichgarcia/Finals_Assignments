import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "midnight" | "emerald" | "solarized";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  midnight: {
    name: "Midnight",
    colors: {
      background: "#0a0e1a",
      surface: "#1a1f2e",
      primary: "#4a9eff",
      secondary: "#6c5ce7",
      text: "#e4e6eb",
      textSecondary: "#b0b3b8",
      accent: "#00d4ff",
      border: "#2d3748"
    }
  },
  emerald: {
    name: "Emerald",
    colors: {
      background: "#0a1f0a",
      surface: "#1a2e1a",
      primary: "#10b981",
      secondary: "#059669",
      text: "#d1fae5",
      textSecondary: "#6ee7b7",
      accent: "#34d399",
      border: "#065f46"
    }
  },
  solarized: {
    name: "Solarized",
    colors: {
      background: "#002b36",
      surface: "#073642",
      primary: "#268bd2",
      secondary: "#6c71c4",
      text: "#839496",
      textSecondary: "#657b83",
      accent: "#2aa198",
      border: "#586e75"
    }
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("midnight");

  const toggleTheme = () => {
    const themeKeys = Object.keys(themes) as Theme[];
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes[theme];
    
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export { themes };
