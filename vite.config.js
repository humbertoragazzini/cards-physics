import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:["5173-humbertorag-rtftemplate-pa3mf34xmo4.ws-eu120.gitpod.io"]
  }
});
