import { defineConfig } from "astro/config";

const normalizeSite = (value) => {
  if (!value) return "https://example.github.io";
  return value.endsWith("/") ? value.slice(0, -1) : value;
};

const normalizeBase = (value) => {
  if (!value || value === "/") return "/";

  const trimmed = value.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
};

const site = normalizeSite(process.env.SITE_URL);
const base = normalizeBase(process.env.BASE_PATH);

export default defineConfig({
  site,
  base,
  output: "static"
});
