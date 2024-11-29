import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    host: true, // Permite conexiones externas (acepta '0.0.0.0')
    port: 5173, // Puerto del servidor
    strictPort: true, // No permite cambiar el puerto automáticamente
  }
})
