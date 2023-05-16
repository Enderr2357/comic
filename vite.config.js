import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  proxy: {
    "/api": {
      target: "http://localhost/",
      changeOrigin: true,
      rewrite(path) {
        return path.replace(/^\/api/, "")
      }
    }
  }
})
