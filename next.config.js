// Add Typescript support
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    // distDir: 'dist',
    cssModules: true,
    cssLoaderOptions: {
      camelCase: true,
      localIdentName: '[hash:base64:5]', 
    },
  }),
);
