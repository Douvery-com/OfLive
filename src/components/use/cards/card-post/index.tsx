import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { AvatarSizes } from "~/core/enum/sizes.enum";
import { UserAvatar } from "../../avatar";
import style from "./index.css?inline";
import { IconArrowDown } from "../../icons";
import { ActionButtonCards } from "./action-card";
import { ImageCard } from "../../image/image-card";
import { LayoutOptions, ObjectFitOptions } from "~/core/types/enum";

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
  });
  const limitChara = 240;
  const comment = post.content;
  const text = comment;
  const limit = limitChara;

  return (
    <section>
      <div class="profile">
        <div class="card_avatar">
          <UserAvatar
            avatar={post.userAvatar}
            handleAvartar=""
            size={AvatarSizes.MEDIUM}
          />
          <IconArrowDown />
        </div>
        <div class="card_info">
          <div class="profile_name">
            <h2>{post.userName}</h2>
            <span>{post.user}</span>
          </div>
          <div class="card_info_user">
            <span>
              <a
                href={`/post/${post._id}`}
                dangerouslySetInnerHTML={
                  state.showMore
                    ? text
                    : text.slice(0, limit) + (text.length > limit ? "..." : "")
                }
              />
              {post.imagen !== undefined ? (
                <div class="section_image">
                  {post.imagen.map((img, i) => (
                    <div key={i} class="img">
                      <ImageCard
                        layout={LayoutOptions.FullWidth}
                        objectFit={ObjectFitOptions.Contain}
                        width={300}
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

            {post.content.length > 100 && (
              <button
                onClick$={() => (state.showMore = !state.showMore)}
                class="show_more"
              >
                {state.showMore ? "Ver menos" : "Ver más"}
              </button>
            )}
            <ActionButtonCards />
          </div>
        </div>
      </div>
    </section>
  );
});
