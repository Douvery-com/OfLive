import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./buttons_profile.css?inline";
  export const ButtonsProfile = component$(
  ({ profile }: { profile:  any }) => {
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
