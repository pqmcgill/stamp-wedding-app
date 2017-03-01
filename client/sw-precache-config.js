module.exports = {
  staticFileGlobs: [
    'build/**/!(*map*)'
  ],
  root: 'build/',
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
};
