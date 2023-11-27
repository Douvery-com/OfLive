import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./index.css?inline";
import { ImageCard } from "~/components/use/image/image-card";
import { LayoutOptions, ObjectFitOptions } from "~/core/types/enum";
import { UserAvatar } from "~/components/use/avatar";
import { AvatarSizes } from "~/core/enum/sizes.enum";

export type TypeProfile = {
  _id: string;
  user: string;
  followers: number;
  following: number;
  name: string;
  description: string;
  avatar: string;
  banner: string;
  isVerify: boolean;
};
export const CardProfilePage = component$(
  ({ profile }: { profile: TypeProfile }) => {
    useStylesScoped$(style);
    return (
      <section>
        {" "}
        <div class="card">
          <div class="card-text">
            <div class="portada">
              <ImageCard
                layout={LayoutOptions.FullWidth}
                objectFit={ObjectFitOptions.Cover}
                width={500}
                height={200}
                isclass="portada"
                src={profile.banner}
                alt="imagen opinion user"
              />
            </div>
            <div class="profile_name_avatar">
              <div class="img-avatar">
                <ImageCard
                  layout={LayoutOptions.Contain}
                  objectFit={ObjectFitOptions.Cover}
                  width={80}
                  height={80}
                  isclass="avatar"
                  src={profile.avatar}
                  radius={50}
                  alt="imagen opinion user"
                />
              </div>
              <div class="title">
                <h2>{profile.name}</h2>
                <span>{profile.user}</span>
              </div>
            </div>
            <div class="title-total">
              <div class="desc">
                <p>{profile.description}</p>
              </div>
              <div class="actions">
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-envelope"></i>
                </button>
                <button>
                  <i class="fas fa-user-friends"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);
