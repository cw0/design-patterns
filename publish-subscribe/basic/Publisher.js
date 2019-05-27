class Publisher {
  constructor(messageBroker) {
    this.messageBroker = messageBroker;
    this.publish = this.publish.bind(this);
  }

  publish(topic, message) {
    this.messageBroker.publish(topic, message);
  }
}

module.exports = Publisher;