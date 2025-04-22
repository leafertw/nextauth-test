import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

const id: string = process.env.PLASMIC_PROJ_ID || '';
const token: string = process.env.PLASMIC_PROJ_TOKEN || '';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: id,
      token: token,
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // During dev, set preview to true to see unpublished changes, but this is much slower.
  preview: false,
});

// Register code components here; See https://docs.plasmic.app/learn/code-components-ref
// Remember to set app host; See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

import { AuthTrigger } from './components/auth/AuthTrigger';

PLASMIC.registerComponent(AuthTrigger, {
  name: "AuthTrigger",
  props: {
    action: {
      type: 'choice',
      options: ['signIn', 'signOut'],
    }
  },
});

import { UserSession } from "@/components/auth/UserSession";

PLASMIC.registerGlobalContext(UserSession, {
  name: "UserSession",
  providesData: true,
  props: {},
  globalActions: {
    login: {
      parameters: [
        {
          name: "provider",
          type: {
            type: "choice",
            options: ["google"],
          },
        },
        {
          name: "redirectTo",
          type: "string",
        },
      ],
    },
    logout: {
      parameters: [
        {
          name: "redirectTo",
          type: "string",
        },
      ],
    },
  },
});
