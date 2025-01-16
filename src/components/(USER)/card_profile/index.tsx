import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./index.css?inline";
import { ImageCard } from "~/components/use/image/image-card";
import { LayoutOptions, ObjectFitOptions } from "~/core/types/enum";
import { IconVerified } from "~/components/use/icons";
import { ButtonsProfile } from "./buttons_profile/buttons_profile";

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
                src={profile?.banner}
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
                <div class="name">
                  <h2>{profile.name}</h2>
                  {profile.isVerify ? <IconVerified /> : ""}
                  <ButtonsProfile profile={profile} />
                </div>

                <span>{profile.user}</span>

                <section class="section_followers">
                  <ul>
                    <li>
                      <span>{profile.followers}</span>
                      <span>Seguidores</span>
                    </li>
                    <li>
                      <span>{profile.following}</span>
                      <span>Siguiendo</span>
                    </li>
                    <li>
                      <span>0</span>
                      <span>Me gusta</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div class="title-total">
              <div class="desc">
                <p>{profile.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);
