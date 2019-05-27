const MessageBroker = require('./MessageBroker');
const Subscriber = require('./subscriber');
const Publisher = require('./publisher');

const messageBroker = new MessageBroker();
const btcSubscriber = new Subscriber('btc service', messageBroker);
const ethSubscriber = new Subscriber('eth service', messageBroker);
const publisher = new Publisher(messageBroker);

btcSubscriber.subscribe('btc');
ethSubscriber.subscribe('eth');

publisher.publish('eth', 1234);
publisher.publish('btc', 11111);

ethSubscriber.unsubscribe('eth');

publisher.publish('btc', 100);
publisher.publish('eth', 4321);
