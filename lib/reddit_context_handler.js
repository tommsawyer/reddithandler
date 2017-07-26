class RedditHandlerContext {
  constructor(handlerStrategy) {
    this.handlerStrategy = handlerStrategy;
  }

  run(topics, options) {
    return this.handlerStrategy.run(topics, options);
  }
}

module.exports = RedditHandlerContext;
