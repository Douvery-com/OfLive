import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { AvatarSizes } from "~/core/enum/sizes.enum";
import { UserAvatar } from "../../avatar";
import style from "./index.css?inline";

import { ActionButtonPostOpen } from "./action-card-open";
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
    openPost: false,
  });
  const text = post.content;

  return (
    <section>
      <div class="profile">
        <div class="card_avatar">
          <UserAvatar
            avatar={post.userAvatar}
            handleAvartar=""
            size={AvatarSizes.MEDIUM}
          />
        </div>
        <div class="card_info">
          <div class="profile_name">
            <h2>
              <a href={`/${post.user}/`}>{post.userName}</a>
            </h2>
            <span>{post.user}</span>
          </div>

          <div class="card_info_user">
            <span>
              <span dangerouslySetInnerHTML={text} />
              {post.imagen !== undefined ? (
                <div class="section_image">
                  {post.imagen.map((img, i) => (
                    <div key={i} class="img">
                      <ImageCard
                        layout={LayoutOptions.FullWidth}
                        objectFit={ObjectFitOptions.Cover}
                        width={300}
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
          </div>
        </div>
      </div>
      <br />
      <ActionButtonPostOpen state={state} />
    </section>
  );
});
