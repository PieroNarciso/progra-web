import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
});
