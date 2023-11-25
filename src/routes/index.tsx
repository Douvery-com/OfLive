import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from "./index.css?inline";
import { IndexCreateTeme } from "~/components/(INDEX)/create-teme";
export default component$(() => {
  useStylesScoped$(style);
  return (
    <section>
      <IndexCreateTeme />
    </section>
  );
});

export const head: DocumentHead = {
  title: "OfLive",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
