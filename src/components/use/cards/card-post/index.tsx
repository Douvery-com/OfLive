import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { AvatarSizes } from "~/core/enum/sizes.enum";
import { UserAvatar } from "../../avatar";
import style from "./index.css?inline";
import { IconArrowDown, IconArrowUp } from "../../icons";
import { ActionButtonCards } from "./action-card";
import { ImageCard } from "../../image/image-card";
import { LayoutOptions, ObjectFitOptions } from "~/core/types/enum";
import { ActionButtonPostOpen } from "../card-post-open/action-card-open";

import { PostResponse } from "~/components/(POST)/post-response";

export type TypePost = {
  _id: string;
  userAvatar: string;
  userName: string;
  user: string;
  content: string;
  imagen?: string[];
};
export default component$(({ post }: { post: TypePost }) => {
  useStylesScoped$(style);
  const state = useStore({
    showMore: false,
    openPost: false,
  });
  const limitChara = 240;
  const comment = post.content;
  const text = comment;
  const limit = limitChara;
  const handleOpenPostFast = $(() => {
    //scrool
    const element = document.getElementById("post");
    element?.scrollIntoView({ behavior: "smooth" });
    state.openPost = !state.openPost;
  });

  return (
    <section>
      <div class="profile">
        <div class="card_avatar">
          <UserAvatar
            avatar={post.userAvatar}
            handleAvartar=""
            size={AvatarSizes.MEDIUM}
          />
          <button onClick$={handleOpenPostFast}>
            {state.openPost ? <IconArrowUp /> : <IconArrowDown />}
          </button>
        </div>
        <div class="card_info">
          <div class="profile_name">
            <h2>
              <a href={`/${post.user}/`}>{post.userName}</a>
            </h2>
            <span>{post.user}</span>
          </div>

          <div class="card_info_user">
            <a href={`/post/${post._id}`} class="card_info_user__date">
              <span>
                <span
                  class="card_info_user__date__content"
                  dangerouslySetInnerHTML={
                    state.showMore
                      ? text
                      : text.slice(0, limit) +
                        (text.length > limit ? "..." : "")
                  }
                />
                {post.imagen?.length ? (
                  <div class="section_image">
                    {post.imagen.map((img, i) => (
                      <div key={i} class="img">
                        <ImageCard
                          layout={LayoutOptions.Contain}
                          objectFit={ObjectFitOptions.Cover}
                          width={500}
                          height={500}
                          isclass="img-comment"
                          src={img}
                          alt="imagen opinion user"
                        />
                      </div>
                    ))}
                    <br />
                  </div>
                ) : (
                  ""
                )}
              </span>
            </a>

            {post.content.length > 100 && (
              <button
                onClick$={() => (state.showMore = !state.showMore)}
                class="show_more"
              >
                {state.showMore ? "Ver menos" : "Ver más"}
              </button>
            )}
            {state.openPost ? (
              <>
                {" "}
                <ActionButtonPostOpen state={state} />
                <PostResponse post={post as any} />
              </>
            ) : (
              <ActionButtonCards />
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
