import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { PaletteMode, Theme } from '@mui/material';
import { createAppTheme, FontSizeOption } from '../theme';

type ThemePreferences = {
  mode: PaletteMode;
  fontSize: FontSizeOption;
};

interface ThemeContextType {
  theme: Theme;
  themePreferences: ThemePreferences;
  toggleThemeMode: () => void;
  setThemeMode: (mode: PaletteMode) => void;
  setFontSize: (size: FontSizeOption) => void;
}

// Create a default context value
const defaultThemePreferences: ThemePreferences = {
  mode: 'light' as PaletteMode,
  fontSize: 'medium' as FontSizeOption,
};

// Create the context
const ThemeContext = createContext<ThemeContextType>({
  theme: createAppTheme(defaultThemePreferences.mode, defaultThemePreferences.fontSize),
  themePreferences: defaultThemePreferences,
  toggleThemeMode: () => {},
  setThemeMode: () => {},
  setFontSize: () => {},
});

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to load saved preferences from localStorage
  const loadSavedPreferences = (): ThemePreferences => {
    try {
      const savedPreferences = localStorage.getItem('themePreferences');
      if (savedPreferences) {
        return JSON.parse(savedPreferences);
      }
    } catch (error) {
      console.error('Error loading saved theme preferences:', error);
    }
    return defaultThemePreferences;
  };

  const [themePreferences, setThemePreferences] = useState<ThemePreferences>(loadSavedPreferences);
  const [theme, setTheme] = useState<Theme>(
    createAppTheme(themePreferences.mode, themePreferences.fontSize)
  );

  // Update theme when preferences change
  useEffect(() => {
    setTheme(createAppTheme(themePreferences.mode, themePreferences.fontSize));
    
    // Save preferences to localStorage
    try {
      localStorage.setItem('themePreferences', JSON.stringify(themePreferences));
    } catch (error) {
      console.error('Error saving theme preferences:', error);
    }
  }, [themePreferences]);

  // Toggle between light and dark mode
  const toggleThemeMode = () => {
    setThemePreferences(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light',
    }));
  };

  // Set a specific theme mode
  const setThemeMode = (mode: PaletteMode) => {
    setThemePreferences(prev => ({
      ...prev,
      mode,
    }));
  };

  // Set a specific font size
  const setFontSize = (fontSize: FontSizeOption) => {
    setThemePreferences(prev => ({
      ...prev,
      fontSize,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themePreferences,
        toggleThemeMode,
        setThemeMode,
        setFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for using the theme context
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext; 