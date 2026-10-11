import {
  siAngular,
  siAppium,
  siCucumber,
  siDeepgram,
  siDocker,
  siElevenlabs,
  siExpress,
  siFastapi,
  siGithubactions,
  siJenkins,
  siJira,
  siKubernetes,
  siLangchain,
  siLanggraph,
  siModelcontextprotocol,
  siMongodb,
  siNodedotjs,
  siOpenjdk,
  siPython,
  siSelenium,
  siTypescript,
} from "simple-icons";
import awsWordmarkRaw from "devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg?raw";
import azureDevOpsRaw from "devicon/icons/azuredevops/azuredevops-plain.svg?raw";
import csharpRaw from "devicon/icons/csharp/csharp-plain.svg?raw";
import playwrightRaw from "devicon/icons/playwright/playwright-plain.svg?raw";

export interface TechLogo {
  /** Path data (`d` attributes), rendered with fill="currentColor". */
  paths: string[];
  viewBox: string;
}

function parseSvg(raw: string): TechLogo {
  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 24 24";
  const paths = [...raw.matchAll(/<path[^>]*?\sd="([^"]+)"/g)].map((m) => m[1]);
  if (paths.length === 0) throw new Error("techLogos: no <path> data found in svg");
  return { paths, viewBox };
}

const twentyFour = "0 0 24 24";

/**
 * Skill name → brand logo. Sources: `simple-icons` (monochrome brand marks)
 * and `devicon` (plain single-color variants). Skills with no brand mark
 * (concepts, proprietary tools) are absent and keep their text pill in Stack.
 */
export const techLogos: Record<string, TechLogo> = {
  // ── simple-icons ────────────────────────────────────────────
  "LangChain": { paths: [siLangchain.path], viewBox: twentyFour },
  "LangGraph": { paths: [siLanggraph.path], viewBox: twentyFour },
  "Deepgram (Voice STT)": { paths: [siDeepgram.path], viewBox: twentyFour },
  "ElevenLabs (Voice TTS)": { paths: [siElevenlabs.path], viewBox: twentyFour },
  "MCP Integrations": { paths: [siModelcontextprotocol.path], viewBox: twentyFour },
  "Python": { paths: [siPython.path], viewBox: twentyFour },
  "FastAPI": { paths: [siFastapi.path], viewBox: twentyFour },
  "Kubernetes": { paths: [siKubernetes.path], viewBox: twentyFour },
  "Docker Containers": { paths: [siDocker.path], viewBox: twentyFour },
  "Angular": { paths: [siAngular.path], viewBox: twentyFour },
  "Node.js": { paths: [siNodedotjs.path], viewBox: twentyFour },
  "Express.js": { paths: [siExpress.path], viewBox: twentyFour },
  "MongoDB": { paths: [siMongodb.path], viewBox: twentyFour },
  "TypeScript": { paths: [siTypescript.path], viewBox: twentyFour },
  "Core Java": { paths: [siOpenjdk.path], viewBox: twentyFour },
  "Jira Software": { paths: [siJira.path], viewBox: twentyFour },
  "Selenium": { paths: [siSelenium.path], viewBox: twentyFour },
  "Appium": { paths: [siAppium.path], viewBox: twentyFour },
  "Cucumber (BDD)": { paths: [siCucumber.path], viewBox: twentyFour },
  "GitHub Actions": { paths: [siGithubactions.path], viewBox: twentyFour },
  "Jenkins": { paths: [siJenkins.path], viewBox: twentyFour },

  // ── devicon (brands removed from simple-icons) ──────────────
  "AWS": parseSvg(awsWordmarkRaw),
  "Azure DevOps (ADO)": parseSvg(azureDevOpsRaw),
  "C#": parseSvg(csharpRaw),
  "Playwright": parseSvg(playwrightRaw),
};
