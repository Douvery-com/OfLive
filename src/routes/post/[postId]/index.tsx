import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { post } from "~/components/(INDEX)/post-index";
import { type TypePost } from "~/components/use/cards/card-post";
import style from "./index.css?inline";

import { PostHeader } from "~/components/(POST)/header_post";
import { PostOpenResponse } from "~/components/(POST)/post-open";
export const usePostId = routeLoader$(
  async ({ params }): Promise<TypePost | undefined> => {
    const res = post.find((post) => post._id === params.postId);
    return res !== undefined ? res : undefined;
  },
);
export default component$(() => {
  useStylesScoped$(style);
  const post = usePostId().value;

  return (
    <div>
      <PostHeader />
      <PostOpenResponse post={post as any} />
    </div>
  );
});
