import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@codemirror/state', '@codemirror/view', '@codemirror/basic-setup', '@codemirror/lang-javascript']
  }
})