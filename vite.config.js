import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace `your-username` and `repo-name` below!
export default defineConfig({
  base: '/my-portfolio/', // <- very important!
  plugins: [react()],
});
