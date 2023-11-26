import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from "./index.css?inline";
import { IndexCreateTeme } from "~/components/(INDEX)/create-teme";
import PostIndex from "~/components/(INDEX)/post-index";
export default component$(() => {
  useStylesScoped$(style);
  return (
    <section>
      <br />
      <IndexCreateTeme />
      <PostIndex />
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
