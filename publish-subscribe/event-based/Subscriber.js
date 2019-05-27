class Subscriber {
  constructor (eventBus) {
    this.eventBus = eventBus;
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.subscribe.bind(this);
  }

  subscribe (topic, handler) {
    this.eventBus.on(topic, handler);
  }

  unsubscribe (topic, handler) {
    this.eventBus.removeListener(topic, handler);
  }
}

module.exports = Subscriber;