class Observable {
  constructor() {
    this.observers = new Set();
    this.attach = this.attach.bind(this);
    this.detach = this.detach.bind(this);
    this.notify = this.notify.bind(this);
  }

  attach(observer) {
    this.observers.add(observer);
  }

  detach(observer) {
    this.observers.delete(observer);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

module.exports = Observable;
