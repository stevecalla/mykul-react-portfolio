// Importing necessary functions and plugins from Vite and React

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration exported as a default function
// https://vitejs.dev/config/
export default defineConfig({
// Using the 'react' plugin for Vite to enable React support
  plugins: [react()],
})
