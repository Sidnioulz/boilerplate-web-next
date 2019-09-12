// Used by jest, not by Next.js
module.exports = {
  presets: ['next/babel'],
  env: {
    production: {
      plugins: ['babel-plugin-jsx-remove-data-test-id'],
    },
  },
};
