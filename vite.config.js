const reactRefresh = require('@vitejs/plugin-react-refresh')
const path = require('path')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react';`
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: false
  }
}
