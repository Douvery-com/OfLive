import { $, component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";
import Header from "~/components/header/header";
import NavVertical from "~/components/nav-vertical";
import { type ImageTransformerProps, useImageProvider } from "qwik-image";
import { modifyCloudinaryUrl } from "~/core/utils/modify-cloudinary-url";
 
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  const imageTransformer$ = $(
    ({ src, width }: ImageTransformerProps): string => {
      // Ejemplo de uso
      const originalUrl = src;
      const newSegment = `q_auto,f_auto,w_${width}`;
      const modifiedUrl = modifyCloudinaryUrl(originalUrl, newSegment);

      return modifiedUrl;
    },
  );

  useImageProvider({
    resolutions: [550],
    imageTransformer$,
  });
  return (
    <main id="content">
      
        <Header />
     
      <div class="layout_init">
        <aside>
          <NavVertical />
        </aside>
        <div class="slot">
          <div class="contet-slot">
          <Slot />
         </div>
        </div>
        
      </div>
    </main>
  );
});
