// vite.config.js
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: "../",
  resolve: {
    alias: {
      '@fortawesome/free-brands-svg-icons': '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons': '@fortawesome/free-regular-svg-icons',
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
    },
  },
};
