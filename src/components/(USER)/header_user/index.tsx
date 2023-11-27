import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import { IconArrowLeft } from "~/components/use/icons";

export const ProfileHeader = component$(() => {
  useStylesScoped$(
    `
      .section_header_post {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    margin: 0px 0;
}

.button_go_back {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
    opacity: 1;
    font-size: 14px;
    color: var(--color-action-v1);
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

}

.button_go_back:hover {
    transform: scale(1.1);
}
        `,
  );
  const handleBack = $(() => {
    window.history.back();
  });
  return (
    <section class="section_header_post">
      {" "}
      <button class="button_go_back" onClick$={handleBack}>
        <IconArrowLeft />
        <span>Volver</span>{" "}
      </button>
    </section>
  );
});
