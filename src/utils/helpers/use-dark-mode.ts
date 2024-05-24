'use client';

import { useEffect, useState } from 'react';
import { TThemeItem } from '@/utils/helpers/types';

export const useDarkMode = (initial: TThemeItem = 'light'): [ TThemeItem, () => void ] => {
  const [ theme, setTheme ] = useState(initial);
  
  const toggleTheme = () => setTheme(current => {
    if (current === 'light') {
      localStorage.setItem('theme', 'dark');
      return 'dark';
    }
    else if (current === 'dark') {
      localStorage.setItem('theme', 'light');
      return 'light';
    }
    else {
      localStorage.setItem('theme', current);
      return current;
    }
  });
  
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as TThemeItem;
    localTheme && setTheme(localTheme);
  }, []);
  
  return [ theme, toggleTheme ];
};