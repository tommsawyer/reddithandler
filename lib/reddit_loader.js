const request = require('request-promise-native');

class RedditTopic {
  constructor(json) {
    this.json = json;
  }

  get(fieldName) {
    return this.json['data'][fieldName];
  }

  getData() {
    return this.json['data'];
  }
}

const loadRedditPage = section => {
  const url = `https://reddit.com/r/${section}/.json`;

  return request(url)
    .then(body => {
      const rawTopics = JSON.parse(body).data.children;
      return rawTopics.map(topicJson => new RedditTopic(topicJson));
    })
    .catch(() => {
      throw new Error('Something went wrong');
    });
};

module.exports = loadRedditPage;
