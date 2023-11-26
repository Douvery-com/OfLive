import { component$, useStylesScoped$ } from "@builder.io/qwik";
import CardPost from "~/components/use/cards/card-post";
import style from "./index.css?inline";
export const post = [
  {
    _id: "ID_0",

    userAvatar: "https://avatars.githubusercontent.com/u/55435898?v=4",

    userName: "Sabino Aguad",

    user: "@sabino",

    imagen: [],

    content:
      "\n" +
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. \n" +
      "<br />\n" +
      "<br />\n" +
      "      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
      "      ",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435899?v=4",

    userName: "Usuario1",

    user: "@usuario1",

    content:
      "Publicación de ejemplo número 1. Contenido interesante y relevante.",

    imagen: [
      "https://png.pngtree.com/background/20230612/original/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg",
      "https://buffer.com/library/content/images/2023/10/free-images.jpg",
    ],

    _id: "ID_1",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435900?v=4",

    userName: "Usuario2",

    user: "@usuario2",

    imagen: [],

    content:
      "Publicación de ejemplo número 2. Contenido interesante y relevante.",

    _id: "ID_2",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435901?v=4",

    userName: "Usuario3",

    user: "@usuario3",

    imagen: [],

    content:
      "Publicación de ejemplo número 3. Contenido interesante y relevante.",

    _id: "ID_3",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435902?v=4",

    userName: "Usuario4",

    user: "@usuario4",

    imagen: [],

    content:
      "Publicación de ejemplo número 4. Contenido interesante y relevante.",

    _id: "ID_4",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435903?v=4",

    userName: "Usuario5",

    user: "@usuario5",

    imagen: [],

    content:
      "Publicación de ejemplo número 5. Contenido interesante y relevante.",

    _id: "ID_5",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435904?v=4",

    userName: "Usuario6",

    user: "@usuario6",

    content:
      "Publicación de ejemplo número 6. Contenido interesante y relevante.",

    _id: "ID_6",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435905?v=4",

    userName: "Usuario7",

    user: "@usuario7",

    content:
      "Publicación de ejemplo número 7. Contenido interesante y relevante.",

    _id: "ID_7",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435906?v=4",

    userName: "Usuario8",

    user: "@usuario8",

    content:
      "Publicación de ejemplo número 8. Contenido interesante y relevante.",

    _id: "ID_8",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435907?v=4",

    userName: "Usuario9",

    user: "@usuario9",

    content:
      "Publicación de ejemplo número 9. Contenido interesante y relevante.",

    _id: "ID_9",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435908?v=4",

    userName: "Usuario10",

    user: "@usuario10",

    content:
      "Publicación de ejemplo número 10. Contenido interesante y relevante.",

    _id: "ID_10",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435909?v=4",

    userName: "Usuario11",

    user: "@usuario11",

    content:
      "Publicación de ejemplo número 11. Contenido interesante y relevante.",

    _id: "ID_11",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435910?v=4",

    userName: "Usuario12",

    user: "@usuario12",

    content:
      "Publicación de ejemplo número 12. Contenido interesante y relevante.",

    _id: "ID_12",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435911?v=4",

    userName: "Usuario13",

    user: "@usuario13",

    content:
      "Publicación de ejemplo número 13. Contenido interesante y relevante.",

    _id: "ID_13",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435912?v=4",

    userName: "Usuario14",

    user: "@usuario14",

    content:
      "Publicación de ejemplo número 14. Contenido interesante y relevante.",

    _id: "ID_14",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435913?v=4",

    userName: "Usuario15",

    user: "@usuario15",

    content:
      "Publicación de ejemplo número 15. Contenido interesante y relevante.",

    _id: "ID_15",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435914?v=4",

    userName: "Usuario16",

    user: "@usuario16",

    content:
      "Publicación de ejemplo número 16. Contenido interesante y relevante.",

    _id: "ID_16",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435915?v=4",

    userName: "Usuario17",

    user: "@usuario17",

    content:
      "Publicación de ejemplo número 17. Contenido interesante y relevante.",

    _id: "ID_17",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435916?v=4",

    userName: "Usuario18",

    user: "@usuario18",

    content:
      "Publicación de ejemplo número 18. Contenido interesante y relevante.",

    _id: "ID_18",
  },

  {
    userAvatar: "https://avatars.githubusercontent.com/u/55435917?v=4",

    userName: "Usuario19",

    user: "@usuario19",

    content:
      "Publicación de ejemplo número 19. Contenido interesante y relevante.",

    _id: "ID_19",
  },
];
export default component$(() => {
  useStylesScoped$(style);

  return (
    <section>
      <br />
      <br />
      <strong>～ Ultimos post</strong>
      <br />
      <br />
      <br />

      <ul>
        {post.map((post, i) => (
          <li key={i}>
            <CardPost post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
});
