import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import oxlintPlugin from 'vite-plugin-oxlint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),oxlintPlugin()],
})
