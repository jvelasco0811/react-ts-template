import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      reporter: ['text', 'html'],
    },
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
});
