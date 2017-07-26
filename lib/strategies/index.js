const SorterStrategy = require('./sorter_strategy');
const AggregationStrategy = require('./aggregation_strategy');

module.exports = {
  sorting: new SorterStrategy(),
  aggregation: new AggregationStrategy()
};
