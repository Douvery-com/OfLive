import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { UserAvatar } from "~/components/use/avatar";
import { AvatarSizes } from "~/core/enum/sizes.enum";

import style from "./index.css?inline";
export const IndexCreateTeme = component$(() => {
  useStylesScoped$(style);
  return (
    <section class="section_create_teme">
      <div class="profile">
        <UserAvatar
          size={AvatarSizes.MEDIUM}
          avatar="https://res.cloudinary.com/dou/image/upload/v1700939584/357877763_960865368492754_3526834764750886630_n_uqafb2.jpg"
          handleAvartar=""
        />
      </div>
      <div class="create_teme">
        <input
          type="text"
          name="teme"
          id="teme"
          placeholder="Comenta, pregunta o comparte algo"
          class="input-teme"
        />
        <button disabled class="btn-teme">
          Publicar
        </button>
      </div>
    </section>
  );
});
