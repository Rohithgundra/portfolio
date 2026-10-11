// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const isUserSite = repository.endsWith(".github.io");
const isProjectSite = process.env.GITHUB_ACTIONS === "true" && !isUserSite;

export default defineConfig({
  base: isProjectSite ? "/Portfolio" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
