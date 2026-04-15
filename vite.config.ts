import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // This ensures your assets load correctly on GitHub Pages
    base: './', 
    
    plugins: [
      react(), 
      tailwindcss()
    ],
    
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    
    server: {
      // HMR settings for compatibility with AI Studio
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // This helps with debugging deployment path issues
      sourcemap: true, 
    }
  };
});
