import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import tsconfigPaths from "vite-tsconfig-paths";
import Icons from 'unplugin-icons/vite'


declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          extension: 'jsx',
        }),
      ],
    }),
    Icons({
      autoInstall: true,
      compiler: 'jsx', // or 'solid'
    }),
  ],
});
