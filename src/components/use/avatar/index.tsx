import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./index.css?inline";
import type { AvatarSizes } from "~/core/enum/sizes.enum";
export const avatarDefault =
  "https://res.cloudinary.com/dou/image/upload/v1695748655/assets%20page%20web/sihjchomdf0jwbl7nikh_rm0kli.webp";
export const UserAvatar = component$(
  ({
    handleAvartar,
    avatar,
    size,
  }: {
    handleAvartar: any;
    avatar: string;
    size: AvatarSizes;
  }) => {
    useStylesScoped$(style);
    const avatarClass = `container-avatar ${size}`;
    return (
      <div class={avatarClass} onClick$={handleAvartar}>
        <img
          width={200}
          height={200}
          src={avatar ? avatar : avatarDefault}
          alt="Logo-1"
        />
      </div>
    );
  },
);
