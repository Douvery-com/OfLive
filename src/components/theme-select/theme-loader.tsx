import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import {
  DARK_THEME,
  LIGHT_THEME,
  colorSchemeChangeListener,
  getColorPreference,
  setPreference,
} from "./theme-select";
import { GlobalTheme } from "~/context/theme.context";

export const ThemeLoader = component$(() => {
  const globalTheme = useContext(GlobalTheme);

  useVisibleTask$(() => {
    globalTheme.theme = getColorPreference();
    return colorSchemeChangeListener((isDark) => {
      globalTheme.theme = isDark ? DARK_THEME : LIGHT_THEME;
      setPreference(globalTheme.theme);
    });
  });

  return <div data-theme-loader></div>;
});
