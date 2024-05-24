import { FC, PropsWithChildren } from 'react';
import { ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from "next-themes";

const NextUiProvider: FC<PropsWithChildren & {themeProps?: Omit<ThemeProviderProps, 'children'>}> = ({children, themeProps}) => {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default NextUiProvider;
