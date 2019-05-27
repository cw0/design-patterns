class Publisher {
  constructor (eventBus) {
    this.eventBus = eventBus;
    this.publish = this.publish.bind(this);
  }

  publish (topic, data) {
    this.eventBus.emit(topic, data);
  }
}

module.exports = Publisher;