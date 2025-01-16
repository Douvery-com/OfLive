 import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import {
  CardProfilePage,
  type TypeProfile,
} from "~/components/(USER)/card_profile";
import { ProfileHeader } from "~/components/(USER)/header_user";

const profiles: TypeProfile[] = [
  {
    _id: "1FDAS1F32A1",
    user: "@maybeeevirgo",
    followers: 100,
    following: 50,
    name: "virgobaby",
    description: "made in heaven🤍 inquiries: business.mybvirgo@gmail.com 📩",
    avatar:
      "https://pbs.twimg.com/profile_images/1641214587851661313/1FTo4uUq_400x400.jpg",
    banner:
      "https://pbs.twimg.com/media/F_6Ogm1WcAAYInM?format=jpg&name=medium",
    isVerify: true,
  },
];

export const useProfile = routeLoader$(
  async ({ params }): Promise<TypeProfile | undefined> => {
    const res = profiles.find((profile) => profile.user === params.user);

    return res !== undefined ? res : (undefined as any);
  },
);

export default component$(() => {
  const profile = useProfile().value;

  return (
    <main>
      <ProfileHeader />
      <CardProfilePage profile={profile  as any} />
    </main>
  );
});
