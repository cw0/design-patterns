class Subscriber {
  constructor(name, messageBroker) {
    this.name = name;
    this.messageBroker = messageBroker;
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.log = this.log.bind(this);
  }

  subscribe(topic) {
    this.messageBroker.subscribe(topic, this.log);
  }

  unsubscribe(topic) {
    this.messageBroker.unsubscribe(topic, this.log);
  }

  log (data) {
    console.log(`${this.name}: ${data}`);
  }
}

module.exports = Subscriber;