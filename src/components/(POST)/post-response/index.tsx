import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import CardPost from "~/components/use/cards/card-post";
import { type TypePost } from "~/components/use/cards/card-post-open";
import style from "./index.css?inline";
export const PostResponse = component$(({ post }: { post: TypePost }) => {
  useStylesScoped$(style);
  post;
  const state = useStore({
    reposePostList: [
      {
        _id: "1",
        userAvatar:
          "https://pbs.twimg.com/profile_images/1710259147114242048/oX2mzaox_400x400.jpg",
        userName: "ayesha mehak",
        user: "@ayeshamehak114",
        content: "Me",
        imagen: [],
      },
      {
        _id: "af12s2f",
        userAvatar:
          "https://pbs.twimg.com/profile_images/1712508396446883840/RCn-jiGh_400x400.jpg",
        userName: "princess",
        user: "@amlrwi",
        content: "🥹🥹🥹🥹🥹",
        imagen: [],
      },
    ],
  });
  return (
    <section>
    <ul class="post_list">
      {state.reposePostList.map((post, i) => (
        <li key={i} class="post_item">
          <div class="card_post">
            <CardPost post={post} />
          </div>
        </li>
      ))}
    </ul>
  </section>
  );
});
