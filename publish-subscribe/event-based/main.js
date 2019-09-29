const EventEmitter = require('events');
const Publisher = require('./Publisher');
const Subscriber = require('./Subscriber');

const eventBus = new EventEmitter();

const ethSubscriber = new Subscriber(eventBus);
const btcSubscriber = new Subscriber(eventBus);
const publisher = new Publisher(eventBus);

const showOff = (topic) => (data) => {
  console.log(`${topic}: ${data}`);
};

const showOffMore = (topic, data) => {
  console.log(`${topic}: ${data}`);
};

ethSubscriber.subscribe('eth', showOffMore);
btcSubscriber.subscribe('btc', console.log);

publisher.publish('eth', 100);
