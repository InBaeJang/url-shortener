const path = require('path')

module.exports = {
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
    alias: {
      '@errors': path.resolve(__dirname, 'src/errors'),
      '@entity': path.resolve(__dirname, 'src/entity'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
};