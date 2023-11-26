import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./header.css?inline";
import {
  IconBorbleFollow,
  IconHomeInit,
  IconRecently,
  IconToday,
} from "../use/icons";
import { useLocation } from "@builder.io/qwik-city";
export default component$(() => {
  useStylesScoped$(style);
  const { url } = useLocation();

  return (
    <nav>
      <div class="logo">
        <h1>OfLive</h1>
      </div>
      <ul>
        <li>
          <a href="/" class={url.pathname === "/" && "active"}>
            <IconHomeInit size={25} /> Inicio
          </a>
        </li>
        <li>
          <a href="/today" class={url.pathname === "/today/" && "active"}>
            <IconToday size={18} /> Hoy
          </a>
        </li>
        <li>
          <a href="/about">
            <IconRecently size={18} />
            Recientes
          </a>
        </li>
        <li>
          <a href="/about">
            <IconBorbleFollow size={18} /> Seguidos
          </a>
        </li>
      </ul>

      <div>
        <a href="/auth/login">Login</a>
      </div>
    </nav>
  );
});
