// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const isUserSite = repository.toLowerCase().endsWith(".github.io");
const repoName = repository ? repository.split("/")[1].toLowerCase() : "portfolio";
const isProjectSite = process.env.GITHUB_ACTIONS === "true" && !isUserSite;

export default defineConfig({
  site: "https://rohithgundra.github.io",
  base: isProjectSite ? `/${repoName}` : "/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
