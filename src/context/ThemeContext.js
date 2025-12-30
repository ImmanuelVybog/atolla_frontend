import React, { createContext, useState, useContext, useEffect } from 'react';
import { createAppTheme } from '../theme';





// Create a default context value
const defaultThemePreferences = {
  mode: 'light',
  fontSize: 'medium',
};

// Create the context
const ThemeContext = createContext({
  theme: createAppTheme(defaultThemePreferences.mode, defaultThemePreferences.fontSize),
  themePreferences: defaultThemePreferences,
  toggleThemeMode: () => {},
  setThemeMode: () => {},
  setFontSize: () => {},
});

// Provider component
export const ThemeProvider = ({ children }) => {
  // Try to load saved preferences from localStorage
  const loadSavedPreferences = () => {
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

  const [themePreferences, setThemePreferences] = useState(loadSavedPreferences);
  const [theme, setTheme] = useState(
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
  const setThemeMode = (mode) => {
    setThemePreferences(prev => ({
      ...prev,
      mode,
    }));
  };

  // Set a specific font size
  const setFontSize = (fontSize) => {
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