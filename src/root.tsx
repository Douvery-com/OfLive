import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import { GlobalTheme, type SiteTheme } from "./context/theme.context";
import { ThemeLoader } from "./components/theme-select/theme-loader";

export default component$(() => {
  const store = useStore<SiteTheme>({
    theme: "LIGHT_THEME",
  });

  useContextProvider(GlobalTheme, store);
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <ThemeLoader />
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
