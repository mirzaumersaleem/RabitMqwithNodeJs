const helloqueueWorker = require('./workers/worker');
const helloqueueWorkerCallback = require('./workers/helloqueue.worker');

const byequeueWorker = require('./workers/worker');
const byequeueWorkerCallback = require('./workers/byequeue.worker');

const greetingQueueWorker = require('./workers/worker');
const greetingQueueWorkerCallback = require('./workers/greetings.worker');

module.exports.init = () => {
	helloqueueWorkerCallback.init('helloqueue');
	byequeueWorkerCallback.init('byequeue');
	greetingQueueWorkerCallback.init('greetings')

	helloqueueWorker.init('helloqueue', helloqueueWorkerCallback.messageReceivedEvent);
	byequeueWorker.init('byequeue', byequeueWorkerCallback.messageReceivedEvent);
	byequeueWorker.init('greetings', greetingQueueWorkerCallback.messageReceivedEvent);


};