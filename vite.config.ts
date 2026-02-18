import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(({ mode }) => {
  // Load env file from the client directory (where .env is located)
  const env = loadEnv(mode, path.resolve(import.meta.dirname, "client"), '');
  
  console.log("Loading environment variables:", {
    mode,
    envPath: path.resolve(import.meta.dirname, "client"),
    apiKey: env.VITE_FIREBASE_API_KEY ? "Found" : "Missing",
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN ? "Found" : "Missing", 
    projectId: env.VITE_FIREBASE_PROJECT_ID ? "Found" : "Missing"
  });
  
  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
    ],
    publicDir: path.resolve(import.meta.dirname, "attached_assets"),
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    define: {
      // Explicitly define environment variables for the build
      'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
      'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
      'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
    },
  };
});
