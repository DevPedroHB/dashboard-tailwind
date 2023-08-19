"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ReactNode } from "react";

interface IProviders extends ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children, ...props }: IProviders) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
