import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Optional: allow extra dev-server hosts via env, e.g.
//   PREVIEW_HOST=my-app.vercel.app npm run dev
// Left unset, this is a no-op and Vite keeps its default host checking.
const extraHosts = process.env.PREVIEW_HOST
  ? process.env.PREVIEW_HOST.split(",").map((h) => h.trim()).filter(Boolean)
  : [];

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: extraHosts,
  },
});
