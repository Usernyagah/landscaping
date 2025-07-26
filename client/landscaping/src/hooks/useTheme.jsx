import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const pref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(pref);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  const toggleTheme = () => setDarkMode(dm => !dm);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);

