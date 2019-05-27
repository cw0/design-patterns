class Observer {
  constructor(name) {
    this.name = name;
    this.count = 0;
    this.update = this.update.bind(this);
  }

  update() {
    this.count ++;
    console.log(`${this.name}: ${this.count}`);
  }
}

module.exports = Observer;