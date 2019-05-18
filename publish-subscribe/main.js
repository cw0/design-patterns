const MessageQueue = require('./messageQueue');
const Subscriber = require('./subscriber');

const messageQueue = new MessageQueue();
const subscriber = new Subscriber('btc service');
const subscriber2 = new Subscriber('eth service');

messageQueue.subscribe('btc', subscriber.log);
messageQueue.subscribe('eth', subscriber2.log);

messageQueue.publish('eth', 1234);
messageQueue.publish('btc', 11111);

messageQueue.unsubscribe('eth', subscriber2.log);

messageQueue.publish('btc', 100);
messageQueue.publish('eth', 4321);
