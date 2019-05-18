class Subscriber {
  constructor(name) {
    this.name = name;
    this.log = this.log.bind(this);
  }

  log (data) {
    console.log(`${this.name}: ${data}`);
  }
}

module.exports = Subscriber;