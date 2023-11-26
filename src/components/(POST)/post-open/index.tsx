import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./index.css?inline";
import { type TypePost } from "~/components/use/cards/card-post";
import CardPostOpen from "~/components/use/cards/card-post-open";
import { PostResponse } from "../post-response";

export const PostOpenResponse = component$(({ post }: { post: TypePost }) => {
  useStylesScoped$(style);

  return (
    <>
      <section>
        <div class="card-open">
          <CardPostOpen post={post as any} />
        </div>
      </section>
      <br />
      <PostResponse post={post} />
    </>
  );
});
