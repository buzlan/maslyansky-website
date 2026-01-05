import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { existsSync } from "fs";
import { resolve } from "path";

// Проверяем наличие файла CNAME для определения кастомного домена
const hasCustomDomain = existsSync(resolve(__dirname, "public/CNAME"));

// Если используется кастомный домен, base должен быть '/'
// Иначе используем '/maslyansky-website/' для GitHub Pages
const base = hasCustomDomain 
  ? '/' 
  : (process.env.GITHUB_PAGES === 'true' ? '/maslyansky-website/' : '/');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
});