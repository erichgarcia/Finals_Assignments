import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "corporate" | "slate" | "light";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  corporate: {
    name: "Corporate Blue",
    colors: {
      background: "#0f172a",
      surface: "#1e293b",
      primary: "#2563eb",
      secondary: "#1d4ed8",
      text: "#e2e8f0",
      textSecondary: "#94a3b8",
      accent: "#38bdf8",
      border: "#334155"
    }
  },
  slate: {
    name: "Slate Gray",
    colors: {
      background: "#111827",
      surface: "#1f2933",
      primary: "#4b5563",
      secondary: "#374151",
      text: "#e5e7eb",
      textSecondary: "#9ca3af",
      accent: "#6b7280",
      border: "#374151"
    }
  },
  light: {
    name: "Light Professional",
    colors: {
      background: "#f8fafc",
      surface: "#ffffff",
      primary: "#2563eb",
      secondary: "#64748b",
      text: "#1e293b",
      textSecondary: "#475569",
      accent: "#0ea5e9",
      border: "#e2e8f0"
    }
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("corporate");

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