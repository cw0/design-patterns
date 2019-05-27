class MessageQueue {
  constructor() {
    this.topics = {};
  }

  subscribe(topic, subscriber) {
    if (!this.topics.hasOwnProperty(topic)) {
      this.topics[topic] = new Set([subscriber]);
    } else {
      this.topics[topic].add(subscriber);
    }
  }

  unsubscribe(topic, subscriber) {
    if (this.topics.hasOwnProperty(topic)) {
      this.topics[topic].delete(subscriber);
    }
  }

  publish(topic, message) {
    if (this.topics.hasOwnProperty(topic)) {
      this.topics[topic].forEach((subscriber) => {
        subscriber.call(this, message);
      });
    }
  }
}

module.exports = MessageQueue;