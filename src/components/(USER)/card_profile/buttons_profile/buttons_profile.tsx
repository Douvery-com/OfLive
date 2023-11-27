import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./buttons_profile.css?inline";
import { type TypeProfile } from "..";
export const ButtonsProfile = component$(
  ({ profile }: { profile: TypeProfile }) => {
    useStylesScoped$(style);
    profile;
    return (
      <section class="section_buttons">
        <div class="buttons">
          <button class="btn-follow"> + Seguir</button>
        </div>
      </section>
    );
  },
);
