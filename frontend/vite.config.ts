import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = resolve(__dirname, "..");
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    ...(isCodexSeatbeltSandbox
      ? {
          host: "0.0.0.0",
          allowedHosts: ["terminal.local"],
          watch: { useFsEvents: false, usePolling: true },
        }
      : {}),
  },
  build: {
    outDir: resolve(projectRoot, "dist"),
    emptyOutDir: true,
  },
});
