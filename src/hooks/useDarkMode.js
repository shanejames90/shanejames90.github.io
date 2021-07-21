import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    if (localStorage.theme === undefined) {
      root.classList.add(theme);
      root.classList.remove(colorTheme);
    }
    if (localStorage.theme === 'light' || !('theme' in localStorage)) {
      root.classList.add(theme);
      root.classList.remove(colorTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
