 var events = require('events');
 var eventEmitter = new events.EventEmitter();

 var customEvent = function() {
     console.log('from custom event')

 }
 eventEmitter.on('testEvent', customEvent);



 eventEmitter.emit('testEvent');