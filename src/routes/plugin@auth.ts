import { serverAuth$ } from "@builder.io/qwik-auth";

import type { Provider } from "@auth/core/providers";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [] as Provider[],
  }));
