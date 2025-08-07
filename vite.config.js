import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Importe o plugin

export default defineConfig({
  // Adicione o svgr() aos plugins
  plugins: [react(), svgr()]
});
