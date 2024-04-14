import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import React from "react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
