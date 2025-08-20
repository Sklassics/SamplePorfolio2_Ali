import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "log-errors",
      buildEnd(err) {
        if (err) {
          console.error("ROLLUP BUILD ERROR:\n", err);
        }
      }
    }
  ]
});
