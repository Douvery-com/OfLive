import { createContextId } from '@builder.io/qwik';
import { type ThemePreference } from '~/components/theme-select/theme-select';

export interface SiteTheme {
  theme: ThemePreference | 'LIGHT_THEME';
}

export const GlobalTheme = createContextId<SiteTheme>('site-theme');
