import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { post } from "~/components/(INDEX)/post-index";
import CardPost, { type TypePost } from "~/components/use/cards/card-post";
import style from "./index.css?inline";
export const usePostId = routeLoader$(
  async ({ params }): Promise<TypePost | undefined> => {
    const res = post.find((post) => post._id === params.postId);
    return res !== undefined ? res : undefined;
  },
);
export default component$(() => {
  useStylesScoped$(style);
  const post = usePostId().value;
  const handleBack = $(() => {
    window.history.back();
  });
  return (
    <div>
      <section class="section_header_post">
        {" "}
        <button class="button_go_back" onClick$={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"
            />
          </svg>
          <span>Volver</span>{" "}
        </button>
      </section>
      <section>
        <CardPost post={post as any} />
      </section>
    </div>
  );
});
