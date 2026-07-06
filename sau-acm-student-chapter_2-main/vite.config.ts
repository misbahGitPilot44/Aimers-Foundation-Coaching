import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine base path based on environment
// Default to '/' for local build (cPanel) and Netlify
let basePath = '/';
// If building in GitHub Actions (for GitHub Pages), use the repository name
if (process.env.GITHUB_ACTIONS === 'true') {
  basePath = '/sau-acm-student-chapter/';
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
  server: {
    port: 5173,
  },
});