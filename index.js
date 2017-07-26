const loadRedditPage = require('./lib/reddit_loader');
const RedditContextHandler = require('./lib/reddit_context_handler');
const exporters = require('./lib/exporters');
const strategies = require('./lib/strategies');
const path = require('path');
const express = require('express');
const app = express();

const PATH_TO_STATIC_CONTENT = path.join(__dirname, 'public');

app.set('view engine', 'pug');

app.use(express.static(PATH_TO_STATIC_CONTENT));

app.get('/load', function(req, res, next) {
  const { subreddit, strategy, fieldName,
    direction, fields, tableName, answerType } = req.query;

  const redditHandler = new RedditContextHandler(strategies[strategy]);
  const exporter = exporters[answerType];

  loadRedditPage(subreddit)
    .then(topics => {
      const strategyResult = redditHandler.run(topics, {
        field: fieldName,
        direction
      });

      const exportedFields = strategy === 'sorting' ?
        fields.split(',') :
        [fieldName, 'articlesCount', 'scoreSumm'];

      const result = exporter.export(strategyResult, exportedFields, tableName);

      res.set({'Content-Disposition':`attachment; filename="${new Date().toLocaleString()}.${answerType.toLowerCase()}"`});
      res.send(result);
    })
    .catch(next);
});

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(3000);
