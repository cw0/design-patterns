class Publisher {
  constructor(messageQueue, topic) {
    this.messageQueue = messageQueue;
    this.topic = topic
    setTimeout(this.publish.bind(this), 1000);
  }

  publish() {
    let value = Math.floor(Math.random() * 2000);
    let nextInterval = Math.floor(Math.random() * 2000);
    this.messageQueue.publish(this.topic, value);
    setTimeout(this.publish.bind(this), nextInterval);
  }
}

module.exports = Publisher;