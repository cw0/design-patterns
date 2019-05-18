const MessageQueue = require('./messageQueue');
const Subscriber = require('./subscriber');
const Publisher = require('./publisher');

const messageQueue = new MessageQueue();
const btcSubscriber = new Subscriber('btc service', messageQueue);
const ethSubscriber = new Subscriber('eth service', messageQueue);
const publisher = new Publisher(messageQueue);

btcSubscriber.subscribe('btc');
ethSubscriber.subscribe('eth');

publisher.publish('eth', 1234);
publisher.publish('btc', 11111);

ethSubscriber.unsubscribe('eth');

publisher.publish('btc', 100);
publisher.publish('eth', 4321);
