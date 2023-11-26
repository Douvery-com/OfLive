import { component$, useStylesScoped$ } from "@builder.io/qwik";
import CardPost from "~/components/use/cards/card-post";
import style from "./index.css?inline";
export default component$(() => {
  useStylesScoped$(style);
  const post = [
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435898?v=4",
      userName: "Sabino Aguad",
      user: "@sabino",
      content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
<br />
<br />
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      `,
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435899?v=4",
      userName: "Usuario1",
      user: "@usuario1",
      content:
        "Publicación de ejemplo número 1. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435900?v=4",
      userName: "Usuario2",
      user: "@usuario2",
      content:
        "Publicación de ejemplo número 2. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435901?v=4",
      userName: "Usuario3",
      user: "@usuario3",
      content:
        "Publicación de ejemplo número 3. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435902?v=4",
      userName: "Usuario4",
      user: "@usuario4",
      content:
        "Publicación de ejemplo número 4. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435903?v=4",
      userName: "Usuario5",
      user: "@usuario5",
      content:
        "Publicación de ejemplo número 5. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435904?v=4",
      userName: "Usuario6",
      user: "@usuario6",
      content:
        "Publicación de ejemplo número 6. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435905?v=4",
      userName: "Usuario7",
      user: "@usuario7",
      content:
        "Publicación de ejemplo número 7. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435906?v=4",
      userName: "Usuario8",
      user: "@usuario8",
      content:
        "Publicación de ejemplo número 8. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435907?v=4",
      userName: "Usuario9",
      user: "@usuario9",
      content:
        "Publicación de ejemplo número 9. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435908?v=4",
      userName: "Usuario10",
      user: "@usuario10",
      content:
        "Publicación de ejemplo número 10. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435909?v=4",
      userName: "Usuario11",
      user: "@usuario11",
      content:
        "Publicación de ejemplo número 11. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435910?v=4",
      userName: "Usuario12",
      user: "@usuario12",
      content:
        "Publicación de ejemplo número 12. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435911?v=4",
      userName: "Usuario13",
      user: "@usuario13",
      content:
        "Publicación de ejemplo número 13. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435912?v=4",
      userName: "Usuario14",
      user: "@usuario14",
      content:
        "Publicación de ejemplo número 14. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435913?v=4",
      userName: "Usuario15",
      user: "@usuario15",
      content:
        "Publicación de ejemplo número 15. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435914?v=4",
      userName: "Usuario16",
      user: "@usuario16",
      content:
        "Publicación de ejemplo número 16. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435915?v=4",
      userName: "Usuario17",
      user: "@usuario17",
      content:
        "Publicación de ejemplo número 17. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435916?v=4",
      userName: "Usuario18",
      user: "@usuario18",
      content:
        "Publicación de ejemplo número 18. Contenido interesante y relevante.",
    },
    {
      userAvatar: "https://avatars.githubusercontent.com/u/55435917?v=4",
      userName: "Usuario19",
      user: "@usuario19",
      content:
        "Publicación de ejemplo número 19. Contenido interesante y relevante.",
    },
  ];
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
