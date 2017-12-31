var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  repo: ''
}, function () {
  console.info("Successfully pushed / deployed");
});
