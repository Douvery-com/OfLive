import { $, component$, useContext, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./theme-select.css?inline";
import { themeStorageKey } from "../router-head/theme-script/theme-script";
import { GlobalTheme } from "~/context/theme.context";

export const DARK_THEME = "DARK_THEME";
export const LIGHT_THEME = "LIGHT_THEME";
export type ThemePreference = typeof DARK_THEME | typeof LIGHT_THEME;

export const colorSchemeChangeListener = (
  onColorSchemeChange: (isDark: boolean) => void,
) => {
  const listener = ({ matches: isDark }: MediaQueryListEvent) => {
    onColorSchemeChange(isDark);
  };
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => listener(event));

  return () =>
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", listener);
};

export const setPreference = (theme: ThemePreference) => {
  localStorage.setItem(themeStorageKey, theme);
  reflectPreference(theme);
};

export const reflectPreference = (theme: ThemePreference) => {
  document.firstElementChild?.setAttribute("data-theme", theme);
  document.firstElementChild?.classList.toggle("dark", theme === DARK_THEME);
};

export const getColorPreference = (): ThemePreference => {
  const preference = localStorage.getItem(themeStorageKey);
  return preference === DARK_THEME ? DARK_THEME : LIGHT_THEME;
};
export const ThemeSelect = component$(() => {
  useStylesScoped$(styles);
  const state = useContext(GlobalTheme);

  const onChange$ = $(() => {
    const initialPreference = getColorPreference();
    setPreference(initialPreference);

    state.theme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setPreference(state.theme);
  });

  return (
    <select onChange$={onChange$} value={state.theme} aria-label="Select theme">
      <option value={LIGHT_THEME}>🌞 Tema claro</option>
      <option value={DARK_THEME}>🌜 Tema oscuro</option>
    </select>
  );
});
