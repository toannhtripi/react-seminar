// Add Typescript support
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    // distDir: 'dist',
    cssModules: true,
    cssLoaderOptions: {
      camelCase: true,
      // localIdentName: '[local]', // Uncomment this to disable hash
    },
  }),
);
