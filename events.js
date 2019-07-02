const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('userJoined', username => {
  console.log(`${username} has joined the chat room.`);
  eventEmitter.on('message', message => console.log(message));
});

const postMessage = message => {
  eventEmitter.emit('message', message);
};

const userLogin = () => {
  eventEmitter.emit('userJoined', 'SpongeBob');
  postMessage('Hello folks!');
};

setTimeout(userLogin, 2000);
