import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  console.log({ env });

  return {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
        {
          find: "@hooks",
          replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
        },
        {
          find: "@locales",
          replacement: fileURLToPath(new URL("./src/locales", import.meta.url)),
        },
        {
          find: "@components",
          replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
        },
        {
          find: "@routes",
          replacement: fileURLToPath(new URL("./src/routes", import.meta.url)),
        },
        {
          find: "@style",
          replacement: fileURLToPath(new URL("./src/style", import.meta.url)),
        },
        {
          find: "@constants",
          replacement: fileURLToPath(new URL("./src/constants", import.meta.url)),
        },
        {
          find: "@redux",
          replacement: fileURLToPath(new URL("./src/redux", import.meta.url)),
        },
        {
          find: "@utils",
          replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
        },
        {
          find: "@restful",
          replacement: fileURLToPath(new URL("./src/restful", import.meta.url)),
        },
        {
          find: "@interface",
          replacement: fileURLToPath(new URL("./src/interface", import.meta.url)),
        },
      ],
    },
    plugins: [
      react(),
      Pages({
        routeStyle: "next",
        dirs: [
          {
            dir: "src/app",
            baseRoute: env.VITE_PUBLIC_URL,
            filePatern: "**/index.tsx",
          },
        ],
        extendRoute(route, parent) {
          // Augment the route with meta that indicates that the route requires authentication.
          return route;
        },
        onRoutesGenerated: (routes) => {
          //console.log("onRoutesGenerated", JSON.stringify(routes));
          return routes;
        },
      }),
    ],
    server: {
      host: true,
      port: Number(env.VITE_PORT),
    },
    build: {
      sourcemap: command === "build",
    },
  };
});
