const MessageQueue = require('./messageQueue');
const Subscriber = require('./subscriber');
const Publisher = require('./publisher');

const messageQueue = new MessageQueue();
const subscriber = new Subscriber(messageQueue, ['btc']);
const publisher = new Publisher(messageQueue, 'btc');
