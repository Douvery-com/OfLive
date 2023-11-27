import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import { IconArrowLeft, IconShared } from "~/components/use/icons";

export const ProfileHeader = component$(() => {
  useStylesScoped$(
    `
      .section_header_post {
        position: relative;
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

.shared_button {
  font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: absolute;
    top: 22px;
    right: 10px;
    color: var(--color-action-v1);


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
      <button class="shared_button">
        Compartir
        <IconShared size="20" />
      </button>
    </section>
  );
});
