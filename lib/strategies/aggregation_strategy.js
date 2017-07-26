const Strategy = require('./strategy');
const { NumbersComparator } = require('../comparators');

class AggregationStrategy extends Strategy {
  run(topics, options) {
    const { field } = options;

    const aggregation = topics.reduce((result, topic) => {
      if (!result[topic.get(field)]) {
        result[topic.get(field)] = {
          articlesCount: 1,
          scoreSumm: topic.get('score')
        };
      } else {
        result[topic.get(field)].articlesCount++;
        result[topic.get(field)].scoreSumm += topic.get('score');
      }

      return result;
    }, {});

    const comparator = new NumbersComparator('desc');

    return Object.keys(aggregation).reduce((result, fieldName) => {
      result.push({
        [field]: fieldName,
        articlesCount: aggregation[fieldName].articlesCount,
        scoreSumm: aggregation[fieldName].scoreSumm
      });

      return result;
    }, []).sort((first, second) => comparator.compare(first.articlesCount, second.articlesCount));
  }
}

module.exports = AggregationStrategy;
