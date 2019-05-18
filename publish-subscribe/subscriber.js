class Subscriber {
  constructor(name, messageQueue) {
    this.name = name;
    this.messageQueue = messageQueue;
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.log = this.log.bind(this);
  }

  subscribe(topic) {
    this.messageQueue.subscribe(topic, this.log);
  }

  unsubscribe(topic) {
    this.messageQueue.unsubscribe(topic, this.log);
  }

  log (data) {
    console.log(`${this.name}: ${data}`);
  }
}

module.exports = Subscriber;