module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifext.json',
    'build/static/**/!(*map*)'
  ],
  navigateFallback: 'index.html',
  swFilePath: 'build/service-worker.js'
};
