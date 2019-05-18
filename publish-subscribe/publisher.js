class Publisher {
  constructor(messageQueue) {
    this.messageQueue = messageQueue;
    this.publish = this.publish.bind(this);
  }

  publish(topic, message) {
    this.messageQueue.publish(topic, message);
  }
}

module.exports = Publisher;