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
    <>
      {" "}
      <section>
        <ul class="post_list">
          {state.reposePostList.map((post, i) => (
            <li key={i} class="post_item">
              <div class="line_vertical">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.742 12L7.656 6.287q-.177-.25-.04-.519q.138-.268.44-.268q.12 0 .229.056q.109.057.169.157L12.962 12l-4.508 6.287q-.061.1-.17.157q-.11.056-.232.056q-.292 0-.433-.268q-.14-.269.037-.519L11.742 12Zm5.796 0l-4.086-5.713q-.177-.25-.04-.519q.138-.268.44-.268q.12 0 .229.056q.109.057.169.157L18.758 12l-4.508 6.287q-.06.1-.17.157q-.11.056-.232.056q-.292 0-.433-.268q-.14-.269.037-.519L17.538 12Z"
                  />
                </svg>
              </div>
              <div class="card_post">
                <CardPost post={post} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
});
