import {
  $,
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import style from "./index.css?inline";
export default component$(() => {
  useStylesScoped$(style);
  const isVisible = useSignal(false);

  // Mostrar el botón cuando se hace scroll hacia abajo
  const toggleVisibility = $(() => {
    if (window.pageYOffset > 300) {
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  });

  // Función para hacer scroll hacia arriba
  const scrollToTop = $(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animación suave
    });
  });

  useVisibleTask$(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  });
  return (
    <button
      class={`scroll-to-top ${isVisible.value ? "visible" : ""}`}
      onClick$={scrollToTop}
    >
      ↑ Subir
    </button>
  );
});
