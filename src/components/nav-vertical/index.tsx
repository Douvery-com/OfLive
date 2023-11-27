import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./index.css?inline";
import { ThemeSelect } from "../theme-select/theme-select";
import {
  IconGroup,
  IconGroupCommunity,
  IconHeartFavorite,
  IconMessage,
  IconNotification,
  IconProfile,
} from "../use/icons";
export default component$(() => {
  useStylesScoped$(style);
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <IconGroupCommunity size={40} /> Comunidades
          </a>
        </li>
        <li>
          <a href="/about">
            <IconGroup size={25} /> Grupos
          </a>
        </li>
        <li>
          <a href="/about">
            {" "}
            <IconNotification size={28} /> Notificaciones
          </a>
        </li>
        <li>
          <a href="/about">
            <IconMessage size={28} />
            Mensajes
          </a>
        </li>
        <li>
          <a href="/about">
            <IconHeartFavorite size={28} /> Favoritos
          </a>
        </li>
        <li>
          <a href="/about">
            {" "}
            <IconProfile size={28} /> Perfil
          </a>
        </li>
      </ul>
      <ul>
        <li class="select_teme">
          <ThemeSelect />
        </li>
      </ul>
    </nav>
  );
});
