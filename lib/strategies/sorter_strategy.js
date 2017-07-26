const Strategy = require('./strategy');
const { Comparator } = require('../comparators');

class SorterStrategy extends Strategy {
  run(topics, options) {
    const { field, direction } = options;
    const firstField = topics[0].get(field);
    const comparator = Comparator.getComparatorByType(typeof firstField, direction);

    topics.sort((first, second) => {
      const firstField = first.get(field);
      const secondField = second.get(field);
      return comparator.compare(firstField, secondField);
    });

    return topics.map(topic => topic.getData());
  }
}

module.exports = SorterStrategy;
