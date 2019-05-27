let instance = null;

class Singleton {
  constructor(name) {
    if (instance) return instance;
    instance = this;
    this.name = name;
  }
}

module.exports = Singleton;