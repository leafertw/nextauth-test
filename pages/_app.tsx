// pages/_app.tsx
import { AppProps } from 'next/app';

// -------------------- PLASMIC GLOBAL VARIANTS --------------------
//import { useRouter } from 'next/router';
import {
    //PlasmicRootProvider,
    DataProvider,
} from '@plasmicapp/loader-nextjs';

// -------------------- FOR NEXT-AUTH --------------------
import { SessionProvider } from "next-auth/react";

export default function AcrossAllPages({
    Component,
    pageProps: { session, ...pageProps },
  }: AppProps) {

    return (
        <>
            <SessionProvider session={session}>

                <DataProvider>
                    <Component {...pageProps} />
                </DataProvider>

            </SessionProvider>
        </>
    );
};