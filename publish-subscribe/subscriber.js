class Subscriber {
  constructor(messageQueue, topics) {
    this.messageQueue = messageQueue;
    topics.forEach((element) => {
      this.messageQueue.subscribe(element, this.log);
    })
  }

  log(data) {
    console.log(data);
  }
}

module.exports = Subscriber;