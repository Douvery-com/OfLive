import {
  DARK_THEME,
  LIGHT_THEME,
} from '~/components/theme-select/theme-select';

export const themeStorageKey = 'theme-preference';

export const ThemeScript = () => {
  const themeScript = `
        let selectedTheme = localStorage.getItem('${themeStorageKey}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? '${LIGHT_THEME}' : '${LIGHT_THEME}')
        let root = document.firstElementChild;
        root.setAttribute('data-theme', selectedTheme);
        root.classList.toggle('dark', selectedTheme === '${DARK_THEME}');
        `;
  return <script dangerouslySetInnerHTML={themeScript} />;
};
